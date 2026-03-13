import React, { useEffect, useMemo, useState } from "react";
import productsData from "../../../Products.json";
import { useParams } from "react-router-dom";
import "./css/productDetail.css";
import { BsBoxSeam, BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";

function ProductDetail() {
  const { id } = useParams();

  const product = productsData.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);
  const images = useMemo(() => {
    if (!product) return [];
    const base = [product.image, product.hoverImage].filter(Boolean);
    return [...new Set(base)];
  }, [product]);

  const [mainImage, setMainImage] = useState(product ? product.image : "");

  useEffect(() => {
    if (!product) return;
    try {
      const key = "recentlyViewed";
      const stored = JSON.parse(localStorage.getItem(key) || "[]");
      const next = [product.id, ...stored.filter((id) => id !== product.id)];
      localStorage.setItem(key, JSON.stringify(next.slice(0, 4)));
    } catch {
      console.error("error");
    }
  }, [product]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      {/* LEFT IMAGE SECTION */}
      <div className="product-images">
        <div className="main-image">
          <button className="nav-arrow nav-left" aria-label="Previous image">
            ‹
          </button>
          <img src={mainImage} alt={product.title} />
          <button className="nav-arrow nav-right" aria-label="Next image">
            ›
          </button>
        </div>

        <div className="thumbnail-images">
          {images.map((img) => (
            <button
              key={img}
              className={`thumb ${mainImage === img ? "active" : ""}`}
              onClick={() => setMainImage(img)}
              type="button"
              aria-label="Select product image"
            >
              <img src={img} alt="" />
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT PRODUCT INFO */}
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">${product.price}.00</p>
        <div className="divider" />

        {/* QUANTITY + CART */}
        <div className="quantity-cart">
          <div className="qty-box">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>
          <button className="add-cart">ADD TO CART</button>
          <button className="buy-now">BUY IT NOW</button>
        </div>

        <div className="action-links">
          <button type="button">♡ Add To Wishlist</button>
          <button type="button">⇄ Compare</button>
        </div>

        <div className="divider" />

        {/* PRODUCT META */}
        <div className="product-meta">
          <div>
            <span>Vendor</span>
            <strong>{product.vendor || "AirWalk"}</strong>
          </div>
          <div>
            <span>Type</span>
            <strong>{product.Type || "Slip-Ons"}</strong>
          </div>
          <div>
            <span>Sku</span>
            <strong>{product.Sku || "null"}</strong>
          </div>
          <div>
            <span>Available</span>
            <strong>{product.Available ? "Available" : "Out of stock"}</strong>
          </div>
        </div>

        <div className="accordion" id="productDetailAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="pd-heading-shipping">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#pd-collapse-shipping"
                aria-expanded="false"
                aria-controls="pd-collapse-shipping"
              >
                Shipping information
              </button>
            </h2>
            <div
              id="pd-collapse-shipping"
              className="accordion-collapse collapse"
              aria-labelledby="pd-heading-shipping"
              data-bs-parent="#productDetailAccordion"
            >
              <div className="accordion-body">
                Free shipping on orders over $100. Ships in 2-4 business days.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="pd-heading-care">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#pd-collapse-care"
                aria-expanded="false"
                aria-controls="pd-collapse-care"
              >
                Care Guide
              </button>
            </h2>
            <div
              id="pd-collapse-care"
              className="accordion-collapse collapse"
              aria-labelledby="pd-heading-care"
              data-bs-parent="#productDetailAccordion"
            >
              <div className="accordion-body">
                Wipe clean with a damp cloth. Air dry only.
              </div>
            </div>
          </div>
        </div>

        <div className="trust-list">
          <div>✓55% Linen, 45% Rayon</div>
          <div>✓ Secure payment</div>
          <div>✓ 2 Year Warranty</div>
        </div>

        <div className="social-proof">
          <p>
            <span className="dot">●</span> 18 customers are viewing this product
          </p>
          <p>🔥 30 sold in last 18 hours</p>
          <p className="social-line">
            <BsBoxSeam />
            <span>Spend $1,000.00 for Free Shipping</span>
          </p>
        </div>

        <div className="share-row">
          <button type="button" className="share-btn">
            <BsFacebook />
            <span>Share</span>
          </button>
          <button type="button" className="share-btn">
            <BsTwitter />
            <span>Tweet</span>
          </button>
          <button type="button" className="share-btn">
            <BsPinterest />
            <span>Pin it</span>
          </button>
        </div>

        <div className="payment-box">
          <p>Guarantee safe checkout</p>
          <div className="payment-logos">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/payments.jpg?v=1731652750&width=360" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
