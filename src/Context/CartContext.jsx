import { createContext, useState, useEffect, useCallback } from "react";

export const CartContext = createContext();

const STORAGE_KEY = "cartItems";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch {
            console.error("Failed to load cart from localStorage");
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    const addToCart = useCallback((product) => {
        if (!product?.id) return;

        const quantityToAdd = product.qty || 1;

        setCart((prevCart) => {
            const existItem = prevCart.find((item) => item.id === product.id);
            if (existItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + quantityToAdd }
                        : item
                );
            }
            return [...prevCart, { ...product, qty: quantityToAdd }];
        });
    }, []);

    const updateQuantity = useCallback((id, qty) => {
        if (qty < 1) {
            removeFromCart(id);
            return;
        }
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, qty } : item
            )
        );
    }, []);

    const removeFromCart = useCallback((id) => {
        setCart((prevCart) => {
            const newCart = prevCart.filter((item) => item.id !== id);

            // Remove from localStorage
            localStorage.removeItem(`product_qty_${id}`);
            console.log(`Removed product ${id} quantity from localStorage`);

            // Dispatch event to notify product detail page
            const event = new CustomEvent('productRemovedFromCart', {
                detail: { productId: id }
            });
            window.dispatchEvent(event);

            return newCart;
        });
    }, []);

    const clearCart = useCallback(() => {
        setCart([]);

        // Clear all product quantities
        const keys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('product_qty_')) {
                keys.push(key);
            }
        }
        keys.forEach(key => localStorage.removeItem(key));
        console.log('Cleared all product quantities');

        // Dispatch event
        const event = new CustomEvent('cartCleared');
        window.dispatchEvent(event);
    }, []);

    const getTotalPrice = useCallback(() => {
        return cart.reduce((total, item) => total + (item.price || 0) * item.qty, 0).toFixed(2);
    }, [cart]);

    const getUniqueItemsCount = useCallback(() => {
        return cart.length;
    }, [cart]);

    const getTotalQuantity = useCallback(() => {
        return cart.reduce((total, item) => total + item.qty, 0);
    }, [cart]);

    const value = {
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getUniqueItemsCount,
        getTotalQuantity,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};