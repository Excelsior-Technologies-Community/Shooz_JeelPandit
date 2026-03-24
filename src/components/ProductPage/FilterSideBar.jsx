import React, { useState } from "react";
import productsData from "../../../Products.json";
import { Link, useNavigate } from "react-router-dom";
import "./css/filterSide.css";
import { BsCartPlus, BsEye, BsHeart, BsHeartFill } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { useCart } from "../../Context/useCart";
import { useWishlist } from "../../Context/useWishlist";

function FilterSideBar() {
  const navigate = useNavigate();
  const maxPrice = Math.ceil(Math.max(...productsData.map((p) => p.price)));

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    priceRange: maxPrice,
  });

  const [sortOption, setSortOption] = useState("az");
  const [viewMode, setViewMode] = useState(3);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeMobileFilter, setActiveMobileFilter] = useState(null);

  const categories = [...new Set(productsData.map((p) => p.category))];
  const brands = [...new Set(productsData.map((p) => p.brand))];
  const colors = [...new Set(productsData.map((p) => p.color))];

  // Simple add to cart function - exactly like ProductCard
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      image: product.image,
      price: Number(product.price),
      title: product.title,
      brand: product.brand,
    });
  };

  const handleFilterChange = (type, value) => {
    if (type === "priceRange") {
      setFilters((prev) => ({ ...prev, priceRange: Number(value) }));
      return;
    }

    setFilters((prev) => {
      const currentValues = prev[type];

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter((v) => v !== value),
        };
      }

      return {
        ...prev,
        [type]: [...currentValues, value],
      };
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

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  const stopCardClick = (event) => {
    event.stopPropagation();
  };

  const handleWishlistClick = (event, product) => {
    event.stopPropagation();
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

  /* ---------------- FILTER PRODUCTS ---------------- */

  let filteredProducts = productsData.filter((p) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(p.category)) &&
      (filters.brand.length === 0 || filters.brand.includes(p.brand)) &&
      (filters.color.length === 0 || filters.color.includes(p.color)) &&
      p.price <= filters.priceRange
    );
  });

  /* ---------------- SORT PRODUCTS ---------------- */

  if (sortOption === "az") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title),
    );
  }

  if (sortOption === "za") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.title.localeCompare(a.title),
    );
  }

  if (sortOption === "priceLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sortOption === "priceHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  const hasActiveFilters =
    filters.category.length > 0 ||
    filters.brand.length > 0 ||
    filters.color.length > 0 ||
    filters.priceRange < maxPrice;

  return (
    <div className="shop-container">
      {/* FILTER SIDEBAR */}
      <aside className={`shop-filters ${showMobileFilters ? "open" : ""}`}>
        <button
          className="close-filters"
          onClick={() => {
            setShowMobileFilters(false);
            setActiveMobileFilter(null);
          }}
        >
          ✕
        </button>

        {/* Mobile Filter Menu */}
        <div className="mobile-filter-menu">
          {!activeMobileFilter ? (
            <>
              <div className="filter-header-mobile">
                <h3>Filter and sort</h3>
                <span className="product-count-mobile">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="mobile-filter-sections">
                <div
                  className="mobile-filter-section"
                  onClick={() => setActiveMobileFilter("price")}
                >
                  <span>Price</span>
                  <span className="arrow">›</span>
                </div>
                <div
                  className="mobile-filter-section"
                  onClick={() => setActiveMobileFilter("brand")}
                >
                  <span>Brand</span>
                  <span className="arrow">›</span>
                </div>
                <div
                  className="mobile-filter-section"
                  onClick={() => setActiveMobileFilter("category")}
                >
                  <span>Category</span>
                  <span className="arrow">›</span>
                </div>
                <div
                  className="mobile-filter-section"
                  onClick={() => setActiveMobileFilter("color")}
                >
                  <span>Color</span>
                  <span className="arrow">›</span>
                </div>
              </div>

              <div className="mobile-filter-footer">
                <button className="clear-all-mobile" onClick={clearAllFilters}>
                  Clear all
                </button>
                <button
                  className="apply-mobile"
                  onClick={() => setShowMobileFilters(false)}
                >
                  APPLY
                </button>
              </div>
            </>
          ) : (
            <div className="mobile-filter-detail">
              <button
                className="back-btn"
                onClick={() => setActiveMobileFilter(null)}
              >
                ←{" "}
                {activeMobileFilter.charAt(0).toUpperCase() +
                  activeMobileFilter.slice(1)}
              </button>
              <div className="mobile-filter-options">
                {activeMobileFilter === "price" && (
                  <>
                    <h4>Max Price: ${filters.priceRange}</h4>
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={filters.priceRange}
                      onChange={(e) =>
                        handleFilterChange("priceRange", e.target.value)
                      }
                      className="price-slider-mobile"
                    />
                    <div className="price-range-mobile">
                      <span>$0</span>
                      <span>${maxPrice}</span>
                    </div>
                  </>
                )}
                {activeMobileFilter === "brand" &&
                  brands.map((brand) => (
                    <label key={brand} className="filter-label-mobile">
                      <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={() => handleFilterChange("brand", brand)}
                      />{" "}
                      {brand}
                    </label>
                  ))}
                {activeMobileFilter === "category" &&
                  categories.map((cat) => (
                    <label key={cat} className="filter-label-mobile">
                      <input
                        type="checkbox"
                        checked={filters.category.includes(cat)}
                        onChange={() => handleFilterChange("category", cat)}
                      />{" "}
                      {cat}
                    </label>
                  ))}
                {activeMobileFilter === "color" &&
                  colors.map((color) => (
                    <label key={color} className="filter-label-mobile">
                      <input
                        type="checkbox"
                        checked={filters.color.includes(color)}
                        onChange={() => handleFilterChange("color", color)}
                      />
                      <span
                        className="color-dot-mobile"
                        style={{ backgroundColor: color }}
                      ></span>
                      {color}
                    </label>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Filters*/}
        <div className="desktop-filters">
          <div className="filters-header">
            <h3>Filters</h3>
            {hasActiveFilters && (
              <button className="clear-all-btn" onClick={clearAllFilters}>
                Clear All
              </button>
            )}
          </div>

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
        </div>
      </aside>

      {/* PRODUCTS SECTION  */}
      <div className="shop-products">
        <div className="products-header">
          <button
            className="mobile-filter-btn"
            onClick={() => setShowMobileFilters(true)}
          >
            Filter & Sort
          </button>
          <div className="view-toggle">
            <button
              className={viewMode === 2 ? "active" : ""}
              onClick={() => setViewMode(2)}
            >
              II
            </button>
            <button
              className={viewMode === 3 ? "active" : ""}
              onClick={() => setViewMode(3)}
            >
              III
            </button>
            <button
              className={viewMode === 4 ? "active" : ""}
              onClick={() => setViewMode(4)}
            >
              IIII
            </button>
          </div>

          <div className="products-header-right">
            <div className="sort-dropdown">
              <label>Sort By:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="az">Alphabetically, A-Z</option>
                <option value="za">Alphabetically, Z-A</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
            </div>
          </div>
          <p className="product-count">{filteredProducts.length} Products</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid grid" style={{ "--cols": viewMode }}>
            {filteredProducts.map((product) => (
              <div
                className="product-card"
                key={product.id}
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(product.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    handleCardClick(product.id);
                  }
                }}
              >
                <div className="product-card-media">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-card-main-image"
                    />
                  </Link>
                  <img
                    src={product.hoverImage || product.image}
                    alt={product.title}
                    className="product-card-hover-image"
                  />
                  <div className="product-card-footer-actions">
                    <button
                      type="button"
                      className="add-to-cart-btn"
                      onClick={(e) => {
                        e.stopPropagation();  // Only add this line
                        handleAddToCart(product);
                      }}
                    >
                      <BsCartPlus />
                      <span>ADD TO CART</span>
                    </button>
                    <div className="product-card-action-icons">
                      <button aria-label="Quick view" onClick={stopCardClick}>
                        <BsEye />
                      </button>
                      <button
                        aria-label={
                          isInWishlist(product.id)
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        onClick={(event) => handleWishlistClick(event, product)}
                        style={{
                          color: isInWishlist(product.id) ? "#e63946" : undefined,
                        }}
                      >
                        {isInWishlist(product.id) ? <BsHeartFill /> : <BsHeart />}
                      </button>
                      <button
                        aria-label="Compare product"
                        onClick={stopCardClick}
                      >
                        <FaExchangeAlt />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-card-content">
                  <Link
                    to={`/product/${product.id}`}
                    className="product-title-link"
                  >
                    <p className="product-card-price">
                      ${Number(product.price).toFixed(2)}
                    </p>
                    <h3 className="product-card-title">{product.title}</h3>
                  </Link>
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

export default FilterSideBar;
