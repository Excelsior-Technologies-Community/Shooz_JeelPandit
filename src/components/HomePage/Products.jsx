import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../../../Products.json";

function Products() {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { key: "featured", label: "FEATURED" },
    { key: "new", label: "NEW ARRIVALS" },
    { key: "best", label: "BEST SELLER" },
  ];

  const visibleProducts = products.slice(0, 4);

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
     {tabs.slice(0,4).map((tab) => {
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
