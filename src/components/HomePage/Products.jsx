import React, { useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [activeTab, setActiveTab] = useState("featured");

  const products = [
    {
      id: 1,
      title: "Classic White Tennis Sneakers",
      price: 25,
      brand: "SportyFeet",
      category: "featured",
      image:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720",
      hoverImage:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=720",
    },
    {
      id: 2,
      title: "Waterproof Hiking Boots",
      price: 25,
      brand: "TrailGear",
      category: "best",
      image:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720",
      hoverImage:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720",
      swatches: ["#000000", "#131313", "#1f1f1f"],
      countdown: { days: 1675, hours: 22, mins: 55, secs: 18 },
    },
    {
      id: 3,
      title: "Classic Leather Sneakers",
      price: 21,
      brand: "UrbanStep",
      category: "new",
      image:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720",
      hoverImage:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=720",
    },
    {
      id: 4,
      title: "High-Top Canvas Sneakers",
      price: 25,
      brand: "TrendyFeet",
      category: "featured",
      image:
        "http://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720",
      hoverImage:
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=720",
    },
  ];

  const tabs = [
    { key: "featured", label: "FEATURED" },
    { key: "new", label: "NEW ARRIVALS" },
    { key: "best", label: "BEST SELLER" },
  ];

  const visibleProducts = products;

  return (
    <section className="products-section">
      <p className="products-section-kicker">
        THE LATEST TRENDS IN ATHLETIC FOOTWEAR
      </p>
      <h2 className="products-section-title">Sneakers & Kicks</h2>

      <div
        className="products-section-tabs"
        role="tablist"
        aria-label="Product categories"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              className={isActive ? "active" : ""}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div key={activeTab} className="products-grid tab-transition">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Products;
