import React, { useEffect, useState } from "react";
import { FiGift, FiHeadphones, FiRefreshCw, FiTruck } from "react-icons/fi";
import ProductCard from "../HomePage/ProductCard";
import productsData from "../../../Products.json";
import "./css/classicFaqs.css";

const ClasicFAQs = () => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("recentlyViewed") || "[]");
      const items = stored
        .map((id) => productsData.find((p) => p.id === id))
        .filter(Boolean);
      setRecentlyViewed(items);
    } catch {
      setRecentlyViewed([]);
    }
  }, []);

  return (
    <>
      <div className="clasic_faqs">
        <div className="left_side">
          <img
            className="faq_img_main"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900"
            alt="Athlete tying shoe"
          />
          <img
            className="faq_img_overlay"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=720"
            alt="Runner tying shoelaces"
          />
        </div>
        <div className="right_side">
          <p>Classic Meets Contemporary</p>
          <h3>Timeless Styles with a Modern Edge</h3>
          <p>
            Experience the best of both worlds with our collection that
            seamlessly blends timeless classics with modern twists. Elevate your
            wardrobe with pieces that stand the test of time while embracing the
            latest fashion innovations. Shop now for exclusive discounts.
          </p>
          <button className="discover">Discover Now</button>
        </div>
      </div>

      {/* ============facility=============== */}

      <div className="facility_explore">
        <div className="facility">
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiTruck />
            </span>
            <h4>Free Shipping</h4>
            <p>From all orders over $100</p>
          </div>
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiHeadphones />
            </span>
            <h4>Quality Support</h4>
            <p>24/7 online feedback</p>
          </div>
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiRefreshCw />
            </span>
            <h4>Return & Refund</h4>
            <p>Return money within 30 days</p>
          </div>
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiGift />
            </span>
            <h4>Gift Voucher</h4>
            <p>20% off when you shop online</p>
          </div>
        </div>
      </div>

      {/* =================Vid Banner ========== */}
      <div className="vid_banner">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/4625c676b883437ebb9472d75b2f720c.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="vid_overlay" />
        <div className="vid_content">
          <p className="vid_kicker">★★★★★ 3000+ Reviews</p>
          <h2>For the Explorers.</h2>
          <p className="vid_subtitle">Weekends are better with friends</p>
        </div>
      </div>

      {/* ============FAQs============== */}
      <div className="faqs">
        <div className="faqs_header">
          <h1>FAQs</h1>
          <p>Have a question ? We are here to help.</p>
        </div>
        <div className="accordion" id="productFaqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq-heading-one">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-one"
                aria-expanded="false"
                aria-controls="faq-collapse-one"
              >
                Is the shipping free?
              </button>
            </h2>
            <div
              id="faq-collapse-one"
              className="accordion-collapse collapse"
              aria-labelledby="faq-heading-one"
              data-bs-parent="#productFaqAccordion"
            >
              <div className="accordion-body">
                Yes, free shipping is available on orders over $100.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq-heading-two">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-two"
                aria-expanded="false"
                aria-controls="faq-collapse-two"
              >
                When will I receive my item?
              </button>
            </h2>
            <div
              id="faq-collapse-two"
              className="accordion-collapse collapse"
              aria-labelledby="faq-heading-two"
              data-bs-parent="#productFaqAccordion"
            >
              <div className="accordion-body">
                When we have received your order, you will automatically receive
                an e-mail confirming your order. Orders made before 2 PM (CET)
                will be picked, packed and shipped the same day. Delivery time
                is usually 2-4 working days with DHL Express.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq-heading-three">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapse-three"
                aria-expanded="false"
                aria-controls="faq-collapse-three"
              >
                Can I change or return my item?
              </button>
            </h2>
            <div
              id="faq-collapse-three"
              className="accordion-collapse collapse"
              aria-labelledby="faq-heading-three"
              data-bs-parent="#productFaqAccordion"
            >
              <div className="accordion-body">
                If you want to change a product into another model, strap color
                etc., please contact us so we are able to reserve the new item
                in our stock immediately. You are always entitled to an exchange
                or refund within 30 days after you have received your package,
                as long as the item has not been used.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sale_event">
        <div className="sale_event__inner">
          <div className="sale_event__text">
            <h3>Sale Event</h3>
            <p>
              We've refreshed our sale with discounts of up to 50% on select
              styles.
            </p>
          </div>
          <div className="sale_event__badge">End Deal</div>
          <button type="button" className="sale_event__cta">
            Shop Collection
          </button>
        </div>
      </section>

      {/* ===================You may also like============================ */}
      <div className="alsoLike">
        <h1>You may also like</h1>
        <div className="products-grid">
          {productsData.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* ===================Recentl viewed============================ */}

      {recentlyViewed.length > 0 && (
        <section className="recently_viewed">
          <h2>Recently viewed</h2>
          <div className="recently_grid">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ClasicFAQs;
