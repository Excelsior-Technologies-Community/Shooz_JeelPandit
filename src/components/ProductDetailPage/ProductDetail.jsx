import React, { useEffect, useMemo, useState } from "react";
import productsData from "../../../Products.json";
import { useParams, useLocation } from "react-router-dom";
import "./css/productDetail.css";
import { BsBoxSeam, BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useCart } from "../../Context/useCart";
import { useWishlist } from "../../Context/useWishlist";
import { useCompare } from "../../Context/useCompare";

function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = productsData.find((p) => p.id === Number(id));
  const { cart, addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();

  const [qty, setQty] = useState(1);

  // Check if product is in cart
  const isProductInCart = cart.some(item => item.id === Number(id));

  // Get cart quantity if product exists in cart
  const cartItem = cart.find(item => item.id === Number(id));
  const cartQuantity = cartItem ? cartItem.qty : 0;

 

  // Initial load and when cart changes
  useEffect(() => {
    // First check if there's a selected quantity from navigation
    const navQuantity = location.state?.selectedQuantity;

    if (navQuantity) {
      console.log("Using navigation quantity:", navQuantity);
      setQty(navQuantity);
      if (isProductInCart) {
        localStorage.setItem(`product_qty_${id}`, navQuantity);
      }
    } else if (isProductInCart && cartQuantity > 0) {
      // Product is in cart, use cart quantity
      console.log("Using cart quantity:", cartQuantity);
      setQty(cartQuantity);
      localStorage.setItem(`product_qty_${id}`, cartQuantity);
    } else {
      // Product not in cart, reset to 1
      console.log("Resetting to default quantity: 1");
      setQty(1);
      localStorage.removeItem(`product_qty_${id}`);
    }
  }, [id, location.state, isProductInCart, cartQuantity]);

  useEffect(() => {
    const handleProductRemoved = (event) => {
      if (event.detail?.productId === Number(id)) {
        console.log("Product removed from cart, resetting quantity");
        setQty(1);
        localStorage.removeItem(`product_qty_${id}`);
      }
    };

    const handleCartCleared = () => {
      console.log("Cart cleared, resetting quantity");
      setQty(1);
      localStorage.removeItem(`product_qty_${id}`);
    };

    window.addEventListener('productRemovedFromCart', handleProductRemoved);
    window.addEventListener('cartCleared', handleCartCleared);

    return () => {
      window.removeEventListener('productRemovedFromCart', handleProductRemoved);
      window.removeEventListener('cartCleared', handleCartCleared);
    };
  }, [id]);

  const images = useMemo(() => {
    if (!product) return [];
    const base = [product.image, product.hoverImage].filter(Boolean);
    return [...new Set(base)];
  }, [product]);

  const [mainImage, setMainImage] = useState(product ? product.image : "");
  const wishlistActive = isInWishlist(Number(id));
  const compareActive = isInCompare(Number(id));

  const handleAddToCart = () => {
    console.log("Adding to cart with quantity:", qty);

    addToCart({
      id: product.id,
      image: product.image,
      price: Number(product.price),
      title: product.title,
      brand: product.brand,
      swatches: product.swatches || [],
      qty: qty,
    });
  };

  const handleWishlistToggle = () => {
    if (!product) return;

    toggleWishlist({
      id: product.id,
      image: product.image,
      hoverImage: product.hoverImage,
      price: Number(product.price),
      title: product.title,
      brand: product.brand,
      swatches: product.swatches || [],
    });
  };

  const handleCompareToggle = () => {
    if (!product) return;

    toggleCompare({
      id: product.id,
      image: product.image,
      hoverImage: product.hoverImage,
      price: Number(product.price),
      title: product.title,
      brand: product.brand,
      category: product.category,
      Available: product.Available,
    });
  };

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
          <button type="button" className="add-to-cart-btn" onClick={handleAddToCart}>
            <span>ADD TO CART</span>
          </button>
          <button className="buy-now">BUY IT NOW</button>
        </div>

        {/* ✅ FIXED: Only show quantity note when product is in cart */}
        {isProductInCart && (
          <div className="quantity-note" style={{ marginTop: "10px", padding: "8px", backgroundColor: "#e8f5e9", borderRadius: "4px", fontSize: "12px", color: "#2e7d32" }}>
            <strong>📦 Current quantity in cart:</strong> {cartQuantity}
          </div>
        )}

        {/* Show cart status */}
        {/* <div className="cart-status" style={{ marginTop: "5px", fontSize: "11px", color: isProductInCart ? "#e63946" : "#666" }}>
          {isProductInCart ? `🛒 In cart: ${cartQuantity} items` : "Not in cart"}
        </div> */}

        <div className="action-links">
          <button type="button" onClick={handleWishlistToggle}>
            {wishlistActive ? "Remove From Wishlist" : "Add To Wishlist"}
          </button>
          <button
            type="button"
            onClick={handleCompareToggle}
            aria-label={compareActive ? "Remove from compare" : "Add to compare"}
            className={compareActive ? "active" : ""}
          >
            <FaArrowRightArrowLeft />
          </button>
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
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/payments.jpg?v=1731652750&width=360" alt="Payment methods" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

