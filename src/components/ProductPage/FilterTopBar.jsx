import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import productsData from "../../../Products.json";
import "./css/filterSide.css";
import "./css/filterTopbar.css";
import {
  BsCartPlus,
  BsEye,
  BsFilter,
  BsHeart,
  BsHeartFill,
  BsX,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { useCart } from "../../Context/useCart";
import { useWishlist } from "../../Context/useWishlist";

function FilterTopBar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const colorDropdownRef = useRef(null);
  const priceDropdownRef = useRef(null);
  const rawSearchQuery = searchParams.get("search")?.trim() || "";
  const searchQuery = rawSearchQuery.toLowerCase();

  const maxPrice = Math.ceil(Math.max(...productsData.map((p) => p.price)));
  const defaultFilters = {
    priceMin: 0,
    priceMax: maxPrice,
    brand: "all",
    category: "all",
    color: "all",
  };

  const [filters, setFilters] = useState(defaultFilters);
  const [sortOption, setSortOption] = useState("az");
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [mobileFilterView, setMobileFilterView] = useState(null);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      image: product.image,
      price: Number(product.price),
      title: product.title,
      brand: product.brand,
    });
  };

  const categories = useMemo(
    () => [...new Set(productsData.map((p) => p.category))],
    [],
  );
  const brands = useMemo(
    () => [...new Set(productsData.map((p) => p.brand))],
    [],
  );
  const colors = useMemo(
    () => [...new Set(productsData.map((p) => p.color))],
    [],
  );

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => setFilters(defaultFilters);

  const removeFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      ...(key === "priceRange"
        ? { priceMin: 0, priceMax: maxPrice }
        : { [key]: "all" }),
    }));
  };

  const activeFilterChips = [
    filters.brand !== "all" && { key: "brand", label: filters.brand },
    filters.category !== "all" && { key: "category", label: filters.category },
    filters.color !== "all" && { key: "color", label: filters.color },
    (filters.priceMin > 0 || filters.priceMax < maxPrice) && {
      key: "priceRange",
      label: `$${filters.priceMin} - $${filters.priceMax}`,
    },
  ].filter(Boolean);

  let filteredProducts = productsData.filter((product) => {
    const matchesBrand =
      filters.brand === "all" || product.brand === filters.brand;
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;
    const matchesColor =
      filters.color === "all" || product.color === filters.color;
    const matchesPrice =
      product.price >= filters.priceMin && product.price <= filters.priceMax;
    const matchesSearch =
      !searchQuery ||
      [product.title, product.brand, product.category, product.color]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(searchQuery));

    return (
      matchesBrand &&
      matchesCategory &&
      matchesColor &&
      matchesPrice &&
      matchesSearch
    );
  });

  const sortFunctions = {
    az: (a, b) => a.title.localeCompare(b.title),
    za: (a, b) => b.title.localeCompare(a.title),
    priceLow: (a, b) => a.price - b.price,
    priceHigh: (a, b) => b.price - a.price,
  };

  if (sortFunctions[sortOption]) {
    filteredProducts = [...filteredProducts].sort(sortFunctions[sortOption]);
  }

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

  const updatePriceMin = (value) => {
    const nextValue = Math.max(0, Math.min(value, filters.priceMax));
    handleFilterChange("priceMin", nextValue);
  };

  const updatePriceMax = (value) => {
    const nextValue = Math.min(maxPrice, Math.max(value, filters.priceMin));
    handleFilterChange("priceMax", nextValue);
  };

  const mobileSections = [
    { key: "price", label: "Price" },
    { key: "brand", label: "Brand" },
    { key: "category", label: "Category" },
    { key: "color", label: "Color" },
  ];

  const renderMobileRadioOptions = (items, key, inputName) =>
    items.map((item) => (
      <label key={item} className="filter-label-mobile">
        <input
          type="radio"
          name={inputName}
          checked={filters[key] === item}
          onChange={() => handleFilterChange(key, item)}
        />
        <span className="filter-name">{item}</span>
      </label>
    ));

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickOutsideColor =
        colorDropdownRef.current &&
        !colorDropdownRef.current.contains(event.target);
      const clickOutsidePrice =
        priceDropdownRef.current &&
        !priceDropdownRef.current.contains(event.target);

      if (clickOutsideColor) setIsColorOpen(false);
      if (clickOutsidePrice) setIsPriceOpen(false);
    };

    if (isColorOpen || isPriceOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isColorOpen, isPriceOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileFiltersOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileFiltersOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileFiltersOpen(false);
        setMobileFilterView(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeDrawer = () => {
    setIsMobileFiltersOpen(false);
    setMobileFilterView(null);
  };

  return (
    <div className="shop-container topbar-container">
      <div className="topbar-title">
        <h1>
          {searchQuery ? `Search results for "${rawSearchQuery}"` : "Products"}
        </h1>
      </div>

      <div className="topbar-filter-row">
        <div className="topbar-filter-left">
          <span className="topbar-filter-label">Filter:</span>
          <div className="topbar-mobile-toggle">
            <button
              type="button"
              className="topbar-mobile-btn"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <BsFilter size={16} />
              <span>Filter</span>
              {activeFilterChips.length > 0 && (
                <span className="topbar-mobile-badge">
                  {activeFilterChips.length}
                </span>
              )}
            </button>
          </div>

          <div className="topbar-filter-selects">
            <div className="price-dropdown" ref={priceDropdownRef}>
              <button
                type="button"
                className="topbar-dropdown-trigger"
                onClick={() => setIsPriceOpen((prev) => !prev)}
              >
                Price
              </button>
              {isPriceOpen && (
                <div className="topbar-dropdown-menu price-menu">
                  <div className="price-range-slider">
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={filters.priceMin}
                      onChange={(e) => updatePriceMin(Number(e.target.value))}
                      className="range range-min"
                    />
                    <input
                      type="range"
                      min="0"
                      max={maxPrice}
                      value={filters.priceMax}
                      onChange={(e) => updatePriceMax(Number(e.target.value))}
                      className="range range-max"
                    />
                  </div>
                  <div className="price-inputs">
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        min="0"
                        max={filters.priceMax}
                        value={filters.priceMin}
                        onChange={(e) =>
                          updatePriceMin(Number(e.target.value))
                        }
                      />
                    </div>
                    <div className="input-group input-group-sm">
                      <span className="input-group-text">$</span>
                      <input
                        type="number"
                        className="form-control"
                        min={filters.priceMin}
                        max={maxPrice}
                        value={filters.priceMax}
                        onChange={(e) =>
                          updatePriceMax(Number(e.target.value))
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <select
              value={filters.brand}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
            >
              <option value="all">Brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>

            <select
              value={filters.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="all">Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <div className="color-dropdown" ref={colorDropdownRef}>
              <button
                type="button"
                className="color-dropdown-trigger topbar-dropdown-trigger"
                onClick={() => setIsColorOpen((prev) => !prev)}
              >
                <span>{filters.color === "all" ? "Color" : filters.color}</span>
              </button>

              {isColorOpen && (
                <div className="color-swatch-panel">
                  <div className="color-option-list">
                    <button
                      className={`color-option ${filters.color === "all" ? "active" : ""
                        }`}
                      onClick={() => {
                        handleFilterChange("color", "all");
                        setIsColorOpen(false);
                      }}
                    >
                      <span className="color-option-name">Color</span>
                    </button>

                    {colors.map((color) => (
                      <button
                        key={color}
                        className={`color-option ${filters.color === color ? "active" : ""
                          }`}
                        onClick={() => {
                          handleFilterChange("color", color);
                          setIsColorOpen(false);
                        }}
                      >
                        <span
                          className="color-swatch"
                          style={{ backgroundColor: color }}
                        />
                        <span className="color-option-name">{color}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="topbar-filter-right">
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

      {isMobileFiltersOpen && (
        <>
          <div className="offcanvas-drawer open">
            {!mobileFilterView ? (
              <>
                <div className="offcanvas-header">
                  <h3>Filter and sort</h3>
                  <p>{filteredProducts.length} products</p>
                  <button className="offcanvas-close" onClick={closeDrawer}>
                    <BsX size={24} />
                  </button>
                </div>
                <div className="offcanvas-body">
                  <div className="mobile-filter-sections">
                    {mobileSections.map((section) => (
                      <div
                        key={section.key}
                        className="mobile-filter-section"
                        onClick={() => setMobileFilterView(section.key)}
                      >
                        <span>{section.label}</span>
                        <span className="arrow">
                          <BsChevronRight />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mobile-filter-footer">
                  <button className="clear-all-mobile" onClick={clearAllFilters}>
                    Clear all
                  </button>
                  <button className="apply-mobile" onClick={closeDrawer}>
                    APPLY
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
                    <BsChevronLeft />{" "}
                    {mobileFilterView.charAt(0).toUpperCase() +
                      mobileFilterView.slice(1)}
                  </button>
                </div>
                <div className="offcanvas-body mobile-filter-options">
                  {mobileFilterView === "price" && (
                    <>
                      <input
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={filters.priceMax}
                        onChange={(e) =>
                          updatePriceMax(Number(e.target.value))
                        }
                        className="price-slider-mobile"
                      />
                      <div className="price-range-mobile">
                        <span>${filters.priceMin}</span>
                        <span>${filters.priceMax}</span>
                      </div>
                    </>
                  )}
                  {mobileFilterView === "brand" &&
                    renderMobileRadioOptions(brands, "brand", "mobile-brand")}
                  {mobileFilterView === "category" &&
                    renderMobileRadioOptions(
                      categories,
                      "category",
                      "mobile-category",
                    )}
                  {mobileFilterView === "color" &&
                    colors.map((color) => (
                      <label key={color} className="filter-label-mobile">
                        <input
                          type="radio"
                          name="mobile-color"
                          checked={filters.color === color}
                          onChange={() => handleFilterChange("color", color)}
                        />
                        <span
                          className="color-dot-mobile"
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
            )}
          </div>
          <div className="offcanvas-overlay" onClick={closeDrawer}></div>
        </>
      )}

      {activeFilterChips.length > 0 && (
        <div className="topbar-active-filters">
          <div className="topbar-active-chips">
            {activeFilterChips.map((chip) => (
              <button
                key={chip.key}
                className="topbar-chip"
                onClick={() => removeFilter(chip.key)}
              >
                <span>{chip.label}</span>
                <span className="topbar-chip-x">×</span>
              </button>
            ))}
          </div>

          <button className="topbar-clear-link" onClick={clearAllFilters}>
            Clear all
          </button>
        </div>
      )}

      <div className="shop-products">
        {filteredProducts.length > 0 ? (
          <div className="products-grid grid" style={{ "--cols": 4 }}>
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
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
                      <BsCartPlus />
                      <span>ADD TO CART</span>
                    </button>
                    <div className="product-card-action-icons">
                      <button onClick={stopCardClick}>
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
                      <button onClick={stopCardClick}>
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

export default FilterTopBar;
