import { useCart } from "../../Context/useCart";
import { useNavigate } from "react-router-dom";
import "./css/cartOffcanvas.css";

function CartOffcanvas({ isOpen, onClose }) {
    const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice, getUniqueItemsCount } = useCart();
    const navigate = useNavigate();

    const handleProductClick = (item) => {
        console.log("Navigating to product:", item.id);
        console.log("With quantity:", item.qty);

        // Store quantity in localStorage
        localStorage.setItem(`product_qty_${item.id}`, item.qty);
        console.log("Saved to localStorage:", `product_qty_${item.id}`, item.qty);

        // Close the offcanvas
        onClose();

        // Navigate to product detail
        navigate(`/product/${item.id}`);
    };

    // Handle quantity update with event dispatch
    const handleUpdateQuantity = (id, newQty) => {
        updateQuantity(id, newQty);

        // Dispatch custom event to notify product detail page
        const event = new CustomEvent('cartQuantityUpdated', {
            detail: { productId: id, quantity: newQty }
        });
        window.dispatchEvent(event);

        console.log(`Quantity updated for product ${id} to ${newQty}`);
    };

    // Calculate free shipping threshold (example: free shipping over $100)
    const subtotal = parseFloat(getTotalPrice());
    const freeShippingThreshold = 100;
    const remainingForFreeShipping = freeShippingThreshold - subtotal;
    const freeShippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

    return (
        <>
            {/* Offcanvas Overlay */}
            <div
                className={`cart-offcanvas-overlay ${isOpen ? "show" : ""}`}
                onClick={onClose}
            ></div>

            {/* Offcanvas Drawer */}
            <div className={`cart-offcanvas ${isOpen ? "show" : ""}`}>
                <div className="cart-offcanvas-header">
                    <h5 className="cart-offcanvas-title">
                        Cart <span className="cart-count-badge">({getUniqueItemsCount()})</span>
                    </h5>
                    <button
                        type="button"
                        className="cart-close-btn"
                        onClick={onClose}
                        aria-label="Close cart"
                    >
                        ✕
                    </button>
                </div>

                <div className="cart-offcanvas-body">
                    {cart.length === 0 ? (
                        <div className="cart-empty-message">
                            <div className="empty-cart-icon">🛒</div>
                            <p>Your cart is empty</p>
                            <small>Start adding items to get started</small>
                            <button className="btn-continue-shopping-empty" onClick={onClose}>
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Free Shipping Banner */}
                            <div className="free-shipping-banner">
                                <div className="shipping-message">
                                    {remainingForFreeShipping > 0 ? (
                                        <>
                                            <span className="shipping-icon">🚚</span>
                                            Spend <strong>${remainingForFreeShipping.toFixed(2)}</strong> more for
                                            <strong> Free Shipping</strong>
                                        </>
                                    ) : (
                                        <>
                                            <span className="shipping-icon">🎉</span>
                                            Spend $958.00 for Free Shipping
                                        </>
                                    )}
                                </div>
                                <div className="shipping-progress-bar">
                                    <div
                                        className="shipping-progress-fill"
                                        style={{ width: `${freeShippingProgress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Cart Items List */}
                            <div className="cart-items-list">
                                {cart.map((item) => (
                                    <div key={item.id} className="cart-item-card">
                                        <div
                                            className="cart-item-image"
                                            onClick={() => handleProductClick(item)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img
                                                src={item.image || "placeholder.jpg"}
                                                alt={item.title || item.name}
                                            />
                                        </div>

                                        <div className="cart-item-details">
                                            <h6
                                                className="cart-item-name"
                                                onClick={() => handleProductClick(item)}
                                                style={{ cursor: "pointer" }}
                                            >
                                                {item.title || item.name}
                                            </h6>
                                            <p className="cart-item-price">
                                                ${item.price ? item.price.toFixed(2) : "0.00"}
                                            </p>

                                            <div className="cart-item-quantity-remove">
                                                <div className="cart-item-qty-controls">
                                                    <button
                                                        className="qty-minus"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleUpdateQuantity(item.id, item.qty - 1);
                                                        }}
                                                        disabled={item.qty <= 1}
                                                        title="Decrease quantity"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="qty-value">x {item.qty}</span>
                                                    <button
                                                        className="qty-plus"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleUpdateQuantity(item.id, item.qty + 1);
                                                        }}
                                                        title="Increase quantity"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    className="cart-item-remove"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeFromCart(item.id);
                                                    }}
                                                    title="Remove item"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="cart-item-subtotal">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </>
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="cart-offcanvas-footer">
                        {/* Order Notes, Coupon, Shipping Tabs */}
                        <div className="cart-tabs">
                            <button className="cart-tab active">Order Note</button>
                            <button className="cart-tab">Coupon</button>
                            <button className="cart-tab">Shipping</button>
                        </div>

                        {/* Total Section */}
                        <div className="cart-total-section">
                            <div className="cart-total-row">
                                <span>Total:</span>
                                <strong>${getTotalPrice()}</strong>
                            </div>
                            <p className="cart-tax-note">Taxes and shipping calculated at checkout</p>
                        </div>

                        {/* Checkout Button */}
                        <button className="btn-checkout">
                            CHECK OUT
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default CartOffcanvas;