import React, { useState, useEffect } from "react";
import productsData from "../../../Products.json";
import "./css/filterDrawer.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/useCart";
import { useWishlist } from "../../Context/useWishlist";
import { useCompare } from "../../Context/useCompare";

import {
  BsCartPlus,
  BsEye,
  BsHeart,
  BsHeartFill,
  BsFilter,
  BsX,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

function FilterDrawer() {
  const navigate = useNavigate();
  const maxPrice = Math.ceil(Math.max(...productsData.map((p) => p.price)));

  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    priceRange: maxPrice,
  });

  const [sortOption, setSortOption] = useState("az");
  const [viewMode, setViewMode] = useState(3);
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [mobileFilterView, setMobileFilterView] = useState(null);

  const categories = [...new Set(productsData.map((p) => p.category))];
  const brands = [...new Set(productsData.map((p) => p.brand))];
  const colors = [...new Set(productsData.map((p) => p.color))];

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toggleCompare, isInCompare } = useCompare();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      image: product.image,
      price: Number(product.price),
      title: product.title,
      brand: product.brand,
      swatches: product.swatches || [],
    });
  };

  /* BODY SCROLL LOCK */

  useEffect(() => {
    document.body.style.overflow = isOffcanvasOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOffcanvasOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOffcanvasOpen(false);
        setMobileFilterView(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  /* FILTER PRODUCTS */

  let filteredProducts = productsData.filter((p) => {
    return (
      (filters.category.length === 0 ||
        filters.category.includes(p.category)) &&
      (filters.brand.length === 0 || filters.brand.includes(p.brand)) &&
      (filters.color.length === 0 || filters.color.includes(p.color)) &&
      p.price <= filters.priceRange
    );
  });

  /* SORT */

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

  const getActiveFilterCount = () => {
    let count = 0;

    count += filters.category.length;
    count += filters.brand.length;
    count += filters.color.length;

    if (filters.priceRange < maxPrice) count += 1;

    return count;
  };

  const hasActiveFilters = getActiveFilterCount() > 0;

  const closeDrawer = () => {
    setIsOffcanvasOpen(false);
    setMobileFilterView(null);
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

  const handleCompareClick = (event, product) => {
    event.stopPropagation();
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

  return (
    <div className="shop-container">
      <div className="shop-products">
        {/* HEADER */}

        <div className="products-header">
          <div className="products-left">
            <button
              className="filter-btn"
              onClick={() => setIsOffcanvasOpen(true)}
            >
              <BsFilter size={18} />
              <span>Filter</span>

              {hasActiveFilters && (
                <span className="filter-badge-small">
                  {getActiveFilterCount()}
                </span>
              )}
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
          </div>

          <div className="products-right">
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

            <p className="product-count">{filteredProducts.length} Products</p>
          </div>
        </div>

        {/* DRAWER */}

        {isOffcanvasOpen && (
          <>
            <div className="offcanvas-drawer open">
              {!mobileFilterView ? (
                <>
                  <div className="offcanvas-header">
                    <h3>Filters</h3>
                    <button className="offcanvas-close" onClick={closeDrawer}>
                      <BsX size={24} />
                    </button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="mobile-filter-sections">
                      <div
                        className="mobile-filter-section"
                        onClick={() => setMobileFilterView("price")}
                      >
                        <span>Price</span>
                        <span className="arrow">
                          <BsChevronRight />
                        </span>
                      </div>
                      <div
                        className="mobile-filter-section"
                        onClick={() => setMobileFilterView("brand")}
                      >
                        <span>Brand</span>
                        <span className="arrow">
                          <BsChevronRight />
                        </span>
                      </div>
                      <div
                        className="mobile-filter-section"
                        onClick={() => setMobileFilterView("category")}
                      >
                        <span>Category</span>
                        <span className="arrow">
                          <BsChevronRight />
                        </span>
                      </div>
                      <div
                        className="mobile-filter-section"
                        onClick={() => setMobileFilterView("color")}
                      >
                        <span>Color</span>
                        <span className="arrow">
                          <BsChevronRight />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="offcanvas-footer">
                    <button
                      className="offcanvas-clear"
                      onClick={clearAllFilters}
                      disabled={!hasActiveFilters}
                    >
                      Clear All
                    </button>
                    <button className="offcanvas-apply" onClick={closeDrawer}>
                      Apply
                    </button>
                  </div>
                </>
              ) : (
                <div className="mobile-filter-detail">
                  <div className="offcanvas-header">
                    <button
                      className="back-btn"
                      onClick={() => setMobileFilterView(null)}
                    >
                      <BsChevronLeft /> Back
                    </button>
                    <h3 style={{ textTransform: "capitalize" }}>
                      {mobileFilterView}
                    </h3>
                    <button className="offcanvas-close" onClick={closeDrawer}>
                      <BsX size={24} />
                    </button>
                  </div>
                  <div className="offcanvas-body mobile-filter-options">
                    {mobileFilterView === "price" && (
                      <>
                        <input
                          type="range"
                          className="price-slider-mobile"
                          min="0"
                          max={maxPrice}
                          value={filters.priceRange}
                          onChange={(e) =>
                            handleFilterChange("priceRange", e.target.value)
                          }
                        />
                        <div className="price-range-mobile">
                          <span>$0</span>
                          <span>${filters.priceRange}</span>
                        </div>
                      </>
                    )}
                    {mobileFilterView === "brand" &&
                      brands.map((brand) => (
                        <label key={brand} className="filter-label-mobile">
                          <input
                            type="checkbox"
                            checked={filters.brand.includes(brand)}
                            onChange={() => handleFilterChange("brand", brand)}
                          />
                          {brand}
                        </label>
                      ))}
                    {mobileFilterView === "category" &&
                      categories.map((cat) => (
                        <label key={cat} className="filter-label-mobile">
                          <input
                            type="checkbox"
                            checked={filters.category.includes(cat)}
                            onChange={() => handleFilterChange("category", cat)}
                          />
                          {cat}
                        </label>
                      ))}
                    {mobileFilterView === "color" &&
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
                          <span style={{ textTransform: "capitalize" }}>
                            {color}
                          </span>
                        </label>
                      ))}
                  </div>
                  <div className="offcanvas-footer">
                    <button
                      className="offcanvas-clear"
                      onClick={clearAllFilters}
                      disabled={!hasActiveFilters}
                    >
                      Clear All
                    </button>
                    <button className="offcanvas-apply" onClick={closeDrawer}>
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="offcanvas-overlay" onClick={closeDrawer}></div>
          </>
        )}

        {/* PRODUCTS */}

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
                    <button
                      type="button"
                      className="add-to-cart-btn"
                      onClick={(e) => {
                        e.stopPropagation();
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
                        aria-label={
                          isInCompare(product.id)
                            ? "Remove from compare"
                            : "Add to compare"
                        }
                        onClick={(event) => handleCompareClick(event, product)}
                        style={{
                          color: isInCompare(product.id) ? "#188038" : undefined,
                        }}
                      >
                        <FaArrowRightArrowLeft />
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

export default FilterDrawer;
