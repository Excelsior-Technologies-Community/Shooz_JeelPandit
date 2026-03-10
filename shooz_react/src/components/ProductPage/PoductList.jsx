import React, { useState } from "react";
import productsData from "../../../Products.json";
import "./css/productList.css";
import { BsCartPlus, BsEye, BsHeart, BsArrowRepeat } from "react-icons/bs";

function ProductList() {
  const maxPrice = Math.ceil(Math.max(...productsData.map((p) => p.price)));

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    priceRange: maxPrice,
  });

  const categories = [...new Set(productsData.map((p) => p.category))];
  const brands = [...new Set(productsData.map((p) => p.brand))];
  const colors = [...new Set(productsData.map((p) => p.color))];

  const handleFilterChange = (type, value) => {
    if (type === "priceRange") {
      setFilters((prev) => ({ ...prev, priceRange: Number(value) }));
      return;
    }
    setFilters((prev) => {
      const currentValues = prev[type];
      if (currentValues.includes(value)) {
        return { ...prev, [type]: currentValues.filter((v) => v !== value) };
      }
      return { ...prev, [type]: [...currentValues, value] };
    });
  };

  const clearAllFilters = () => {
    setFilters({
      category: [],
      brand: [],
      color: [],
      priceRange: maxPrice,
    });
  };

  const filteredProducts = productsData.filter((p) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(p.category)) &&
      (filters.brand.length === 0 || filters.brand.includes(p.brand)) &&
      (filters.color.length === 0 || filters.color.includes(p.color)) &&
      p.price <= filters.priceRange
    );
  });

  const hasActiveFilters =
    filters.category.length > 0 ||
    filters.brand.length > 0 ||
    filters.color.length > 0 ||
    filters.priceRange < maxPrice;

  return (
    <div className="shop-container">
      {/* FILTER SIDEBAR */}
      <aside className="shop-filters">
        <div className="filters-header">
          <h3>Filters</h3>
          {hasActiveFilters && (
            <button className="clear-all-btn" onClick={clearAllFilters}>
              Clear All
            </button>
          )}
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="active-filters">
            <h4>Active Filters:</h4>
            <div className="active-filter-tags">
              {filters.category.map((cat) => (
                <span className="filter-tag" key={cat}>
                  {cat}
                  <button onClick={() => handleFilterChange("category", cat)}>
                    ×
                  </button>
                </span>
              ))}
              {filters.brand.map((b) => (
                <span className="filter-tag" key={b}>
                  {b}
                  <button onClick={() => handleFilterChange("brand", b)}>
                    ×
                  </button>
                </span>
              ))}
              {filters.color.map((c) => (
                <span className="filter-tag" key={c}>
                  {c}
                  <button onClick={() => handleFilterChange("color", c)}>
                    ×
                  </button>
                </span>
              ))}
              {filters.priceRange < maxPrice && (
                <span className="filter-tag">
                  Under ${filters.priceRange}
                  <button
                    onClick={() => handleFilterChange("priceRange", maxPrice)}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="filter-group">
          <h4>Category</h4>
          {categories.map((cat) => (
            <label key={cat} className="filter-label">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => handleFilterChange("category", cat)}
              />
              <span className="filter-name">{cat}</span>
              <span className="filter-count">
                ({productsData.filter((p) => p.category === cat).length})
              </span>
            </label>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="filter-group">
          <h4>Brand</h4>
          {brands.map((brand) => (
            <label key={brand} className="filter-label">
              <input
                type="checkbox"
                checked={filters.brand.includes(brand)}
                onChange={() => handleFilterChange("brand", brand)}
              />
              <span className="filter-name">{brand}</span>
              <span className="filter-count">
                ({productsData.filter((p) => p.brand === brand).length})
              </span>
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="filter-group">
          <h4>Max Price: ${filters.priceRange}</h4>
          <input
            type="range"
            min="0"
            max={maxPrice}
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            className="price-slider"
          />
          <div className="price-range-display">
            <span>$0</span>
            <span>${maxPrice}</span>
          </div>
        </div>

        {/* Color Filter */}
        <div className="filter-group">
          <h4>Color</h4>
          <div className="color-filters">
            {colors.map((color) => (
              <label key={color} className="color-filter-label">
                <input
                  type="checkbox"
                  checked={filters.color.includes(color)}
                  onChange={() => handleFilterChange("color", color)}
                />
                <span
                  className="color-dot"
                  style={{
                    backgroundColor: color,
                    border: color === "white" ? "1px solid #ddd" : "none",
                  }}
                ></span>
                <span className="color-name">{color}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* PRODUCTS SECTION */}
      {/* PRODUCTS SECTION */}
      <div className="shop-products">
        <div className="products-header">
          <p className="product-count">{filteredProducts.length} Products</p>
          {hasActiveFilters && (
            <p className="filtered-by">
              Filtered by:{" "}
              {[
                filters.category.length > 0 &&
                  `Category: ${filters.category.join(", ")}`,
                filters.brand.length > 0 &&
                  `Brand: ${filters.brand.join(", ")}`,
                filters.color.length > 0 &&
                  `Color: ${filters.color.join(", ")}`,
                filters.priceRange < maxPrice && `Under $${filters.priceRange}`,
              ]
                .filter(Boolean)
                .join(" • ")}
            </p>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-card-media">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-card-main-image"
                  />
                  <img
                    src={product.hoverImage || product.image}
                    alt={product.title}
                    className="product-card-hover-image"
                  />
                  <div className="product-card-footer-actions">
                    <button type="button" className="add-to-cart-btn">
                      <BsCartPlus />
                      <span>ADD TO CART</span>
                    </button>
                    <div className="product-card-action-icons">
                      <button type="button" aria-label="Quick view">
                        <BsEye />
                      </button>
                      <button type="button" aria-label="Add to wishlist">
                        <BsHeart />
                      </button>
                      <button type="button" aria-label="Compare product">
                        <BsArrowRepeat />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-card-content">
                  <p className="product-card-price">
                    ${Number(product.price).toFixed(2)}
                  </p>
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-brand">{product.brand}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>No products match your filters.</p>
            <button className="clear-btn" onClick={clearAllFilters}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
