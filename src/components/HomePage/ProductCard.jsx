import React, { useEffect, useMemo, useState } from "react";
import "./css/productCard.css";
import { FaHeart, FaRegEye, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/useCart";
import { useWishlist } from "../../Context/useWishlist";
import { useCompare } from "../../Context/useCompare";

function ProductCard({
  id,
  image,
  hoverImage,
  price,
  title,
  brand,
  swatches = [],
  countdown = null,
  category = "",
  Available = true,
}) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();
  const wishlistActive = isInWishlist(id);
  const compareActive = isInCompare(id);

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      price: Number(price),
      title,
      brand,
    });
  };

  const handleWishlistToggle = () => {
    toggleWishlist({
      id,
      image,
      hoverImage,
      price: Number(price),
      title,
      brand,
    });
  };

  const handleCompareToggle = () => {
    toggleCompare({
      id,
      image,
      hoverImage,
      price: Number(price),
      title,
      brand,
      category,
      Available,
    });
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  const stopCardClick = (event) => {
    event.stopPropagation();
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
    <article
      className="product-card"
      role="button"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCardClick();
        }
      }}
    >
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
          onClick={(event) => {
            stopCardClick(event);
            handleAddToCart();
          }}
        >
          <FaShoppingCart />
          <span>ADD TO CART</span>
        </button>

        <div className="product-card-action-icons" aria-label="Quick product actions">
          <button type="button" aria-label="Quick view" onClick={stopCardClick}>
            
            <FaRegEye />
          </button>
          <button
            type="button"
            aria-label={wishlistActive ? "Remove from wishlist" : "Add to wishlist"}
            onClick={(event) => {
              stopCardClick(event);
              handleWishlistToggle();
            }}
            style={{ color: wishlistActive ? "#e63946" : undefined }}
          >
            {wishlistActive ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button
            type="button"
            aria-label={compareActive ? "Remove from compare" : "Add to compare"}
            onClick={(event) => {
              stopCardClick(event);
              handleCompareToggle();
            }}
            style={{ color: compareActive ? "#188038" : undefined }}
          >
            <FaArrowRightArrowLeft />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
