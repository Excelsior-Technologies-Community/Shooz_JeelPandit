import React, { useEffect, useMemo, useState } from "react";
import "./css/productCard.css";
import { FaExchangeAlt, FaRegEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../Context/useCart";

function ProductCard({
  id,
  image,
  hoverImage,
  price,
  title,
  brand,
  swatches = [],
  countdown = null,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      price: Number(price),
      title,
      brand,
    });
  };
  const initialSeconds = useMemo(() => {
    if (!countdown) return null;

    const days = Number(countdown.days) || 0;
    const hours = Number(countdown.hours) || 0;
    const mins = Number(countdown.mins) || 0;
    const secs = Number(countdown.secs) || 0;

    return days * 86400 + hours * 3600 + mins * 60 + secs;
  }, [countdown]);

  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds);

  useEffect(() => {
    setRemainingSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (initialSeconds === null) return undefined;

    const intervalId = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev === null) return prev;
        if (prev <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialSeconds]);

  const timer = useMemo(() => {
    if (remainingSeconds === null) return null;

    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const mins = Math.floor((remainingSeconds % 3600) / 60);
    const secs = remainingSeconds % 60;

    return { days, hours, mins, secs };
  }, [remainingSeconds]);

  return (
    <article className="product-card">
      <div className="product-card-media">
        <img className="product-card-main-image" src={image} alt={title} loading="lazy" />
        <img
          className="product-card-hover-image"
          src={hoverImage || image}
          alt={title}
          loading="lazy"
        />

        {timer && (
          <div className="product-card-timer" aria-label="Deal countdown timer">
            <div>
              <strong>{timer.days}</strong>
              <span>Days</span>
            </div>
            <div>
              <strong>{timer.hours}</strong>
              <span>Hours</span>
            </div>
            <div>
              <strong>{timer.mins}</strong>
              <span>Mins</span>
            </div>
            <div>
              <strong>{timer.secs}</strong>
              <span>Secs</span>
            </div>
          </div>
        )}

      </div>

      <div className="product-card-content">
        {swatches.length > 0 && (
          <div className="product-card-swatches" aria-label="Available colors">
            {swatches.map((color, index) => (
              <span key={`${color}-${index}`} style={{ backgroundColor: color }} />
            ))}
          </div>
        )}

        <p className="product-card-price">${Number(price).toFixed(2)}</p>
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-brand">{brand}</p>
      </div>

      <div className="product-card-footer-actions">
        <button
          type="button"
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          <FaShoppingCart />
          <span>ADD TO CART</span>
        </button>

        <div className="product-card-action-icons" aria-label="Quick product actions">
          <button type="button" aria-label="Quick view">
            <FaRegEye />
          </button>
          <button type="button" aria-label="Add to wishlist">
            <FaRegHeart />
          </button>
          <button type="button" aria-label="Compare product">
            <FaExchangeAlt />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
