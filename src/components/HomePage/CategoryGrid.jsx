import React from "react";
import "./css/categoryGrid.css";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Athletic Footwear",
      count: 8,
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540",
    },
    {
      title: "Luxury Leather Shoes",
      count: 8,
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=540",
    },
    {
      title: "Sustainable Footwear",
      count: 8,
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=540",
    },
    {
      title: "Sandals & Slides",
      count: 8,
      img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=540",
    },
  ];

  return (
    <section className="category-section">
      <div className="category-header">
        <span>STYLISH AND COMFORTABLE FOR EVERY SEASON</span>
        <h2>Boots & Booties</h2>
        <p>
          Check out our collection of the top New Products
          <br />
          that encourage conversion.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.img} alt={item.title} />

            <div className="category-label">
              {item.title} <span>{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
