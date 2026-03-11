import React, { useState } from "react";
import "./css/filterDrawer.css";

function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearAll,
  maxPrice,
  categories,
  brands,
  colors,
  productCount,
  hasActiveFilters,
}) {
  const [activeFilter, setActiveFilter] = useState(null);

  return (
    <>
      <div className={`filter-drawer ${isOpen ? "open" : ""}`}>
        <div className="filter-drawer-header">
          <h3>Filter</h3>
          <button className="close-drawer" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* ACTIVE FILTERS */}
        {hasActiveFilters && (
          <div className="active-filters-drawer">
            <div className="active-filter-tags">
              {filters.category.map((cat) => (
                <span className="filter-tag" key={cat}>
                  {cat}
                  <button onClick={() => onFilterChange("category", cat)}>
                    ×
                  </button>
                </span>
              ))}
              {filters.brand.map((b) => (
                <span className="filter-tag" key={b}>
                  {b}
                  <button onClick={() => onFilterChange("brand", b)}>×</button>
                </span>
              ))}
              {filters.color.map((c) => (
                <span className="filter-tag" key={c}>
                  {c}
                  <button onClick={() => onFilterChange("color", c)}>×</button>
                </span>
              ))}
              {filters.priceRange < maxPrice && (
                <span className="filter-tag">
                  Under ${filters.priceRange}
                  <button
                    onClick={() => onFilterChange("priceRange", maxPrice)}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* FILTER SECTIONS */}
        {!activeFilter ? (
          <>
            <div className="filter-sections">
              <div
                className="filter-section"
                onClick={() => setActiveFilter("price")}
              >
                <span>Price</span>
                <span className="arrow">›</span>
              </div>
              <div
                className="filter-section"
                onClick={() => setActiveFilter("brand")}
              >
                <span>Brand</span>
                <span className="arrow">›</span>
              </div>
              <div
                className="filter-section"
                onClick={() => setActiveFilter("category")}
              >
                <span>Category</span>
                <span className="arrow">›</span>
              </div>
              <div
                className="filter-section"
                onClick={() => setActiveFilter("color")}
              >
                <span>Color</span>
                <span className="arrow">›</span>
              </div>
            </div>

            <div className="filter-drawer-footer">
              <button className="clear-all" onClick={onClearAll}>
                Clear all
              </button>
              <button className="apply" onClick={onClose}>
                APPLY
              </button>
            </div>
          </>
        ) : (
          <div className="filter-detail">
            <button className="back-btn" onClick={() => setActiveFilter(null)}>
              ← {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
            </button>
            <div className="filter-options">
              {activeFilter === "price" && (
                <>
                  <h4>Max Price: ${filters.priceRange}</h4>
                  <input
                    type="range"
                    min="0"
                    max={maxPrice}
                    value={filters.priceRange}
                    onChange={(e) =>
                      onFilterChange("priceRange", e.target.value)
                    }
                    className="price-slider-drawer"
                  />
                  <div className="price-range-drawer">
                    <span>$0</span>
                    <span>${maxPrice}</span>
                  </div>
                </>
              )}
              {activeFilter === "brand" &&
                brands.map((brand) => (
                  <label key={brand} className="filter-label-drawer">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand)}
                      onChange={() => onFilterChange("brand", brand)}
                    />
                    {brand}
                  </label>
                ))}
              {activeFilter === "category" &&
                categories.map((cat) => (
                  <label key={cat} className="filter-label-drawer">
                    <input
                      type="checkbox"
                      checked={filters.category.includes(cat)}
                      onChange={() => onFilterChange("category", cat)}
                    />
                    {cat}
                  </label>
                ))}
              {activeFilter === "color" &&
                colors.map((color) => (
                  <label key={color} className="filter-label-drawer">
                    <input
                      type="checkbox"
                      checked={filters.color.includes(color)}
                      onChange={() => onFilterChange("color", color)}
                    />
                    <span
                      className="color-dot-drawer"
                      style={{ backgroundColor: color }}
                    ></span>
                    {color}
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* OVERLAY */}
      {isOpen && <div className="drawer-overlay" onClick={onClose}></div>}
    </>
  );
}

export default FilterDrawer;
