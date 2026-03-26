import { createContext, useCallback, useEffect, useMemo, useState } from "react";

export const CompareContext = createContext();

const STORAGE_KEY = "compareItems";
const MAX_COMPARE_ITEMS = 3;

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      console.error("Failed to load compare items from localStorage");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compareItems));
  }, [compareItems]);

  const isInCompare = useCallback(
    (id) => compareItems.some((item) => item.id === id),
    [compareItems],
  );

  const addToCompare = useCallback((product) => {
    if (!product?.id) return false;

    let added = false;

    setCompareItems((prevItems) => {
      const exists = prevItems.some((item) => item.id === product.id);
      if (exists || prevItems.length >= MAX_COMPARE_ITEMS) return prevItems;

      added = true;
      return [...prevItems, product];
    });

    return added;
  }, []);

  const removeFromCompare = useCallback((id) => {
    setCompareItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const toggleCompare = useCallback(
    (product) => {
      if (!product?.id) return false;

      const exists = compareItems.some((item) => item.id === product.id);
      if (exists) {
        removeFromCompare(product.id);
        return false;
      }

      return addToCompare(product);
    },
    [addToCompare, compareItems, removeFromCompare],
  );

  const clearCompare = useCallback(() => {
    setCompareItems([]);
  }, []);

  const compareCount = useMemo(() => compareItems.length, [compareItems]);

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        compareCount,
        maxCompareItems: MAX_COMPARE_ITEMS,
        addToCompare,
        removeFromCompare,
        toggleCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};
