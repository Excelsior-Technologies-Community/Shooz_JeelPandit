import React, { useState } from "react";
import "./css/productsNav.css";

const ProductsNav = () => {
  // Category data
  const categories = [
    {
      name: "Athletic Footwear",
      count: 8,
      banner:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=2048",
    },
    {
      name: "Boots for Every Occasion",
      count: 8,
      banner:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=2048",
    },
    {
      name: "Luxury Leather Shoes",
      count: 8,
      banner:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=2048",
    },
    {
      name: "Sandals & Slides",
      count: 8,
      banner:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=2048",
    },
    {
      name: "Sneakerhead's Haven",
      count: 10,
      banner:
        "https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=2048",
    },
  ];

  // Product cards
  const products = [
    {
      name: "Athletic Footwear",
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540",
    },
    {
      name: "Boots for Every Occasion",
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=540",
    },
    {
      name: "Luxury Leather Shoes",
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=540",
    },
    {
      name: "Sandals & Slides",
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=540",
    },
    {
      name: "Sneakerhead's Haven",
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=540",
    },
  ];

  // Active category index
  const [activeIndex, setActiveIndex] = useState(3);

  // Current selected category
  const currentCategory = categories[activeIndex];

  return (
    <section className="products-section">
      <div
        className="products-banner"
        style={{
          backgroundImage: `url(${currentCategory.banner})`,
        }}
      >
        <div className="banner-text">
          <h1>{currentCategory.name}</h1>
        </div>
      </div>

      <div className="category-tabs">
        {categories.map((category, index) => (
          <span
            key={index}
            className={activeIndex === index ? "active-tab" : ""}
            onClick={() => setActiveIndex(index)}
          >
            {category.name} ({category.count})
          </span>
        ))}
      </div>

      <div className="divider"></div>

      <div key={activeIndex} className="category-grid">
        {products.map((product, index) => (
          <div className="category-card" key={index}>
            <img src={product.img} alt={product.name} />
            <div className="overlay">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsNav;
