import React from "react";
import "./css/sneakerSection.css";

const cards = [
  // First row
  {
    id: 1,
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045532&width=1920",
    tag: "COMFORT MEETS FASHION",
    title: "Discover shoes that look great",
    link: "SHOP NOW",
  },
  {
    id: 2,
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-2.png?v=1731045532&width=1920",
    tag: "ELEVATE YOUR LOOK",
    title: "Find the perfect pair of shoes",
    link: "SHOP NOW",
  },
  {
    id: 3,
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=1920",
    tag: "STEP INTO STYLE",
    title: "The latest trends in footwear",
    link: "SHOP NOW",
  },
  // Second row
  {
    id: 4,
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-4.png?v=1731045517&width=1920",
    tag: "SHOP BY BRAND",
    title: "Find your favorite brands and styles",
    link: "SHOP NOW",
  },
  {
    id: 5,
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-5.png?v=1731045518&width=1920",
    tag: "SALE AND CLEARANCE",
    title: "Shop our latest deals and discounts",
    link: "SHOP NOW",
  },
];

const SneakerSection = () => {
  return (
    <section className="sneaker-section">
      <div className="sneaker-header">
        <span className="sneaker-subtitle">FASHION SNEAKERS</span>
        <h2 className="sneaker-title">Timeless styles for everyday wear</h2>
        <p className="sneaker-description">
          High-performance footwear for sports and workouts
        </p>
      </div>

      <div className="sneaker-grid">
        {/* First row  */}
        <div className="sneaker-row">
          {cards.slice(0, 3).map((card) => (
            <div key={card.id} className="sneaker-card">
              <div className="sneaker-image-wrapper">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className="sneaker-image"
                />
              </div>
              <div className="sneaker-overlay">
                <span className="sneaker-tag">{card.tag}</span>
                <h3 className="sneaker-headline">{card.title}</h3>
                <a href="#" className="sneaker-link">
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Second row  */}
        <div className="sneaker-row sneaker-row--two">
          {cards.slice(3, 5).map((card) => (
            <div key={card.id} className="sneaker-card sneaker-card--half">
              <div className="sneaker-image-wrapper">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  className="sneaker-image"
                />
              </div>
              <div className="sneaker-overlay">
                <span className="sneaker-tag">{card.tag}</span>
                <h3 className="sneaker-headline">{card.title}</h3>
                <a href="#" className="sneaker-link">
                  {card.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneakerSection;
