import React, { useEffect } from "react";
import "./compareModal.css";
import { BsX } from "react-icons/bs";
import { useCompare } from "../../Context/useCompare";

function CompareModal({ isOpen, onClose }) {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="compare-modal-overlay" onClick={onClose}>
      <div
        className="compare-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Compare products"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="compare-modal-close"
          onClick={onClose}
          aria-label="Close compare modal"
        >
          <BsX />
        </button>

        {compareItems.length === 0 ? (
          <div className="compare-modal-empty">
            <h3>No products in compare list</h3>
            <p>Tap compare on any product card to add items here.</p>
          </div>
        ) : (
          <>
            <div className="compare-modal-header">
              <h3>Compare Products</h3>
              <button
                type="button"
                className="compare-clear-btn"
                onClick={clearCompare}
              >
                Clear all
              </button>
            </div>

            <div className="compare-grid">
              {compareItems.map((product) => (
                <article key={product.id} className="compare-column">
                  <button
                    type="button"
                    className="compare-remove-btn"
                    onClick={() => removeFromCompare(product.id)}
                  >
                    Remove
                  </button>

                  <div className="compare-image-wrap">
                    <img src={product.image} alt={product.title} />
                  </div>

                  <h4>{product.title}</h4>

                  <p className="compare-price">
                    ${Number(product.price || 0).toFixed(2)}
                  </p>

                  <p className="compare-category">
                    {product.category ? String(product.category) : "N/A"}
                  </p>

                  <p className="compare-brand">
                    {product.brand || "N/A"}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CompareModal;