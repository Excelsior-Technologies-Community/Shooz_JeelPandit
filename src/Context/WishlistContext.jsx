import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const WishlistContext = createContext();

const STORAGE_KEY = "wishlistItems";

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      console.error("Failed to load wishlist from localStorage");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = useCallback((product) => {
    if (!product?.id) return;

    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      return exists ? prevWishlist : [...prevWishlist, product];
    });
  }, []);

  const removeFromWishlist = useCallback((id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id),
    );
  }, []);

  const isInWishlist = useCallback(
    (id) => wishlist.some((item) => item.id === id),
    [wishlist],
  );

  const toggleWishlist = useCallback(
    (product) => {
      if (!product?.id) return false;

      const exists = wishlist.some((item) => item.id === product.id);

      if (exists) {
        removeFromWishlist(product.id);
        return false;
      }

      addToWishlist(product);
      return true;
    },
    [addToWishlist, removeFromWishlist, wishlist],
  );

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  const wishlistCount = useMemo(() => wishlist.length, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
