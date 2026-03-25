import { useContext, useEffect, useMemo, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./css/header.css";
import { CartContext } from "../../Context/CartContext";
import CartOffcanvas from "../CartOffcanvas/CartOffcanvas";
import { useWishlist } from "../../Context/useWishlist";
import products from "../../../Products.json";
import ProfileModal from "../ProfileModal/ProfileModal";

const Header = () => {
  const BUY_NOW_URL = "https://qx-shooz.myshopify.com/collections/all";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const { getUniqueItemsCount } = useContext(CartContext);
  const { wishlistCount } = useWishlist();
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const cartCount = getUniqueItemsCount();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const offcanvasElement = document.getElementById("headerSearchOffcanvas");

    if (!offcanvasElement) return undefined;

    const focusSearchInput = () => {
      searchInputRef.current?.focus();
    };

    const resetSearch = () => {
      setSearchQuery("");
    };

    offcanvasElement.addEventListener("shown.bs.offcanvas", focusSearchInput);
    offcanvasElement.addEventListener("hidden.bs.offcanvas", resetSearch);

    return () => {
      offcanvasElement.removeEventListener(
        "shown.bs.offcanvas",
        focusSearchInput,
      );
      offcanvasElement.removeEventListener("hidden.bs.offcanvas", resetSearch);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  };

  const closeSearchOffcanvas = () => {
    const offcanvasElement = document.getElementById("headerSearchOffcanvas");

    if (!offcanvasElement) return;

    Offcanvas.getOrCreateInstance(offcanvasElement).hide();
  };

  const toggleMobileSection = (section) => {
    setOpenMobileSection((prev) => (prev === section ? null : section));
  };

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const searchResults = useMemo(() => {
    if (!normalizedSearchQuery) return [];

    return products
      .filter((product) =>
        [product.title, product.brand, product.category, product.color]
          .filter(Boolean)
          .some((value) =>
            String(value).toLowerCase().includes(normalizedSearchQuery),
          ),
      )
      .slice(0, 3);
  }, [normalizedSearchQuery]);

  const handleSearchSubmit = () => {
    if (!normalizedSearchQuery) return;

    navigate(`/FilterTopBarPage?search=${encodeURIComponent(searchQuery.trim())}`);
    closeSearchOffcanvas();
  };

  const handleSearchResultClick = (productId) => {
    navigate(`/product/${productId}`);
    closeSearchOffcanvas();
  };

  const shopPaths = [
    "/FilterSideBarPage",
    "/FilterDrawerPage",
    "/FilterTopBarPage",
  ];
  const productPaths = ["/product"];
  const blogPaths = [
    "/ListLeftSideBarPage",
    "/ListItemOverlayPage",
    "/GridRightSideBarPage",
    "/GridItemBoxPage",
  ];
  const pagesPaths = ["/AboutUs1Page", "/AboutUs2Page", "/wishlist"];

  const isPathActive = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));

  return (
    <header>
      <div className="top-bar py-2">
        <div className="container d-flex justify-content-between">
          <span className="small">One Day Delivery Available</span>
          <div className="d-flex gap-3 small">
            <span>Login / Register</span>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <button
            className="mobile-menu-trigger d-lg-none me-2"
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>

          <img
            className="navbar-brand fw-bold fs-3"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250"
          />

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>

              <li className="nav-item position-static">
                <a
                  className={`nav-link ${
                    isPathActive(shopPaths) ? "active-main-menu" : ""
                  }`}
                  href="#"
                >
                  Shop <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="mega-menu">
                  <div className="container-fluid">
                    <div className="row px-5 py-5">
                      <div className="col-lg-2">
                        <h6 className="mega-title">Layout</h6>
                        <ul className="mega-links">
                          <li>
                            <NavLink to="/FilterSideBarPage">
                              Filter Sidebar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/FilterDrawerPage">
                              Filter Drawer
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/FilterTopBarPage">Filter Top</NavLink>
                          </li>
                          <li>Without Filter</li>
                          <li>Collection - 2 Columns</li>
                          <li>Collection - 3 Columns</li>
                        </ul>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="mega-title">Features</h6>
                        <ul className="mega-links">
                          <li>Banner Image</li>
                          <li>Banner Split</li>
                          <li>Collection List</li>
                          <li>Pagination</li>
                          <li>Infinity</li>
                          <li>Load More</li>
                        </ul>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="mega-title">Hover Style</h6>
                        <ul className="mega-links">
                          <li>Hover Style 1</li>
                          <li>Hover Style 2</li>
                          <li>Hover Style 3</li>
                          <li>Hover Style 4</li>
                          <li>Hover Style 5</li>
                        </ul>
                      </div>

                      <div className="col-lg-3 text-center">
                        <div className="mega-img-card">
                          <img
                            src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=540"
                            alt="Athletic Footwear"
                          />
                          <h6>Athletic Footwear</h6>
                          <span>8 products</span>
                        </div>
                      </div>

                      <div className="col-lg-3 text-center">
                        <div className="mega-img-card">
                          <img
                            src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540"
                            alt="Boots for Every Occasion"
                          />
                          <h6>Boots for Every Occasion</h6>
                          <span>8 products</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item position-static">
                <a
                  className={`nav-link ${
                    isPathActive(productPaths) ? "active-main-menu" : ""
                  }`}
                  href="#"
                >
                  Product <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="mega-menu">
                  <div className="container-fluid">
                    <div className="row px-5 py-5">
                      <div className="col-lg-2">
                        <h6 className="mega-title">Product Layout</h6>
                        <ul className="mega-links">
                          <li>Thumbnails Bottom</li>
                          <li>Thumbnails Left</li>
                          <li>Thumbnails Right</li>
                          <li>Without Thumbnails</li>
                          <li>List Stacked</li>
                        </ul>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="mega-title">Product Type</h6>
                        <ul className="mega-links">
                          <li>Simple Product</li>
                          <li>Variable Product</li>
                          <li>With Video</li>
                          <li>Sold Out</li>
                        </ul>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="mega-title">List Featured 1</h6>
                        <ul className="mega-links">
                          <li>Sticky ATC</li>
                          <li>Count Down</li>
                          <li>Cross Selling</li>
                          <li>Low Stock Alert</li>
                        </ul>
                      </div>

                      <div className="col-lg-2">
                        <h6 className="mega-title">List Featured 2</h6>
                        <ul className="mega-links">
                          <li>Dropdown Variant</li>
                          <li>Swatch Color</li>
                          <li>Size Guide</li>
                          <li>Description Tab</li>
                        </ul>
                      </div>

                      <div className="col-lg-4 text-center">
                        <div className="mega-img-card">
                          <img
                            src="https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552"
                            alt="Waterproof Hiking Boots"
                          />
                          <h6>$25.00</h6>
                          <span>Waterproof Hiking Boots</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item position-static">
                <a
                  className={`nav-link ${
                    isPathActive(blogPaths) ? "active-main-menu" : ""
                  }`}
                  href="#"
                >
                  Blog <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="mega-menu">
                  <div className="container-fluid">
                    <div className="row px-5 py-5 align-items-start">
                      <div className="col-lg-3">
                        <h6 className="mega-title">List Layout</h6>
                        <ul className="mega-links">
                          <li>
                            <NavLink to="/ListLeftSideBarPage">
                              List Left Sidebar
                            </NavLink>
                          </li>
                          <li>Left Sidebar</li>
                          <li>Right Sidebar</li>
                          <li>List Item Basic</li>
                          <li>
                            <NavLink to="/ListItemOverlayPage">
                              List Item Overlay
                            </NavLink>
                          </li>
                          <li>List Item Classic</li>
                        </ul>
                      </div>

                      <div className="col-lg-3">
                        <h6 className="mega-title">Grid Layout</h6>
                        <ul className="mega-links">
                          <li>Grid Left Sidebar</li>
                          <li>
                            <NavLink to="/GridRightSideBarPage">
                              Grid Right Sidebar
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/GridItemBoxPage">
                              Grid Item Box
                            </NavLink>
                          </li>
                          <li>Grid Item Overlay</li>
                          <li>Grid Item Classic</li>
                        </ul>
                      </div>

                      <div className="col-lg-3">
                        <h6 className="mega-title">Article</h6>
                        <ul className="mega-links">
                          <li>Title in Image</li>
                          <li>Title After Image</li>
                          <li>Left Sidebar</li>
                          <li>Right Sidebar</li>
                          <li>Title Center</li>
                        </ul>
                      </div>

                      <div className="col-lg-3">
                        <div className="blog-promo-card">
                          <img
                            src="https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553"
                            alt="Promo"
                          />

                          <div className="blog-promo-overlay">
                            <h5>Enjoy a 50% Price Slash</h5>
                            <p>Revamp Your Wardrobe at Jaw-Dropping Prices.</p>
                            <button className="btn btn-light btn-sm">
                              SHOP NOW
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item position-relative pages-item">
                <a
                  href="#"
                  className={`nav-link ${
                    isPathActive(pagesPaths) ? "active-main-menu" : ""
                  }`}
                >
                  Pages <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="pages-dropdown">
                  <ul className="pages-menu-list">
                    <li>
                      <NavLink to="/AboutUs1Page">About Us 1</NavLink>
                    </li>
                    <li>
                      <NavLink to="/AboutUs2Page">About Us 2</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about-us-3">About Us 3</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faqs">Faqs</NavLink>
                    </li>
                    <li>
                      <NavLink to="/lookbook">Lookbook</NavLink>
                    </li>
                    <li>
                      <NavLink to="/sizeguide">Size Guide</NavLink>
                    </li>
                    <li>
                      <NavLink to="/wishlist">Wishlist</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="nav-item position-relative">
                <a className="nav-link fw-semibold" href={BUY_NOW_URL}>
                  Buy Now
                </a>
                <span className="badge bg-success sale-badge">Sale</span>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-3 nav-icons">
              <button
                type="button"
                className="header-icon-btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#headerSearchOffcanvas"
                aria-controls="headerSearchOffcanvas"
                aria-label="Open search"
              >
                <i className="bi bi-search"></i>
              </button>
              
              <button
                type="button"
                className="header-icon-btn"
                onClick={() => setIsProfileModalOpen(true)}
                style={{ background: 'none', border: 'none' }}
              >
                <i className="bi bi-person"></i>
              </button>
              <Link to="/wishlist" className="position-relative text-dark">
                <i className="bi bi-heart"></i>
                <span className="badge bg-danger icon-badge">
                  {wishlistCount}
                </span>
              </Link>

              <div
                className="position-relative"
                style={{ cursor: "pointer" }}
                onClick={() => setIsCartOpen(true)}
              >
                <i className="bi bi-bag"></i>
                <span>({cartCount})</span>
              </div>
            </div>
          </div>

          <div className="d-flex d-lg-none align-items-center gap-3 nav-icons mobile-nav-icons">
            <button
              type="button"
              className="header-icon-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#headerSearchOffcanvas"
              aria-controls="headerSearchOffcanvas"
              aria-label="Open search"
            >
              <i className="bi bi-search"></i>
            </button>
              <button
                type="button"
                className="header-icon-btn"
                onClick={() => setIsProfileModalOpen(true)}
                style={{ background: 'none', border: 'none' }}
              >
                <i className="bi bi-person"></i>
              </button>
            <Link to="/wishlist" className="position-relative text-dark">
              <i className="bi bi-heart"></i>
              <span className="badge bg-danger icon-badge">{wishlistCount}</span>
            </Link>

            <div
              className="position-relative"
              style={{ cursor: "pointer" }}
              onClick={() => setIsCartOpen(true)}
            >
              <i className="bi bi-bag"></i>
              <span>({cartCount})</span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-top header-search-offcanvas"
        tabIndex="-1"
        id="headerSearchOffcanvas"
        aria-labelledby="headerSearchOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <div className="header-search-shell">
            <p className="header-search-kicker">WHAT ARE YOU LOOKING FOR?</p>

            <div className="header-search-input-wrap">
              <input
                ref={searchInputRef}
                type="text"
                className="header-search-input"
                placeholder="Search Products..."
                aria-label="Search products"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSearchSubmit();
                  }
                }}
              />
            </div>

            {normalizedSearchQuery && (
              <div className="header-search-results">
                <p className="header-search-results-label">PRODUCTS</p>

                {searchResults.length > 0 ? (
                  <>
                    <div className="header-search-results-list">
                      {searchResults.map((product) => (
                        <button
                          key={product.id}
                          type="button"
                          className="header-search-result-card"
                          onClick={() => handleSearchResultClick(product.id)}
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="header-search-result-image"
                          />
                          <span className="header-search-result-content">
                            <span className="header-search-result-title">
                              {product.title}
                            </span>
                            <span className="header-search-result-price">
                              ${Number(product.price).toFixed(2)}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="header-search-view-all"
                      onClick={handleSearchSubmit}
                    >
                      <span>Search for "{searchQuery.trim()}"</span>
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </>
                ) : (
                  <p className="header-search-empty">
                    No products found for "{searchQuery.trim()}".
                  </p>
                )}
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>

        </div>
      </div>

      <div
        className={`mobile-offcanvas-backdrop ${isMobileMenuOpen ? "show" : ""}`}
        onClick={closeMobileMenu}
      ></div>

      <aside className={`mobile-offcanvas ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="mobile-offcanvas-header">
          <img
            className="navbar-brand fw-bold fs-3 m-0"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250"
          />

          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="mobile-menu-list">
          <li>
            <NavLink to="/" onClick={closeMobileMenu} end>
              Home
            </NavLink>
          </li>

          <li>
            <button
              type="button"
              className={`mobile-accordion-trigger ${
                isPathActive(shopPaths) ? "active-main-menu" : ""
              }`}
              onClick={() => toggleMobileSection("shop")}
              aria-expanded={openMobileSection === "shop"}
            >
              Shop
              <i
                className={`bi ${
                  openMobileSection === "shop"
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>
            </button>
            <ul
              className={`mobile-submenu ${
                openMobileSection === "shop" ? "open" : ""
              }`}
            >
              <li>Filter Sidebar</li>
              <li>Filter Top</li>
              <li>Filter Drawer</li>
              <li>Without Filter</li>
              <li>Collection - 2 Columns</li>
              <li>Collection - 3 Columns</li>
            </ul>
          </li>

          <li>
            <button
              type="button"
              className={`mobile-accordion-trigger ${
                isPathActive(pagesPaths) ? "active-main-menu" : ""
              }`}
              onClick={() => toggleMobileSection("product")}
              aria-expanded={openMobileSection === "product"}
            >
              Product
              <i
                className={`bi ${
                  openMobileSection === "product"
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>
            </button>
            <ul
              className={`mobile-submenu ${
                openMobileSection === "product" ? "open" : ""
              }`}
            >
              <li>Thumbnails Bottom</li>
              <li>Thumbnails Left</li>
              <li>Thumbnails Right</li>
              <li>Without Thumbnails</li>
              <li>Simple Product</li>
              <li>Variable Product</li>
            </ul>
          </li>

          <li>
            <button
              type="button"
              className={`mobile-accordion-trigger ${
                isPathActive(blogPaths) ? "active-main-menu" : ""
              }`}
              onClick={() => toggleMobileSection("blog")}
              aria-expanded={openMobileSection === "blog"}
            >
              Blog
              <i
                className={`bi ${
                  openMobileSection === "blog"
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>
            </button>
            <ul
              className={`mobile-submenu ${
                openMobileSection === "blog" ? "open" : ""
              }`}
            >
              <li>Left Sidebar</li>
              <li>Right Sidebar</li>
              <li>Grid Layout</li>
              <li>Article</li>
            </ul>
          </li>

          <li>
            <button
              type="button"
              className={`mobile-accordion-trigger ${
                isPathActive(pagesPaths) ? "active-main-menu" : ""
              }`}
              onClick={() => toggleMobileSection("pages")}
              aria-expanded={openMobileSection === "pages"}
            >
              Pages
              <i
                className={`bi ${
                  openMobileSection === "pages"
                    ? "bi-chevron-up"
                    : "bi-chevron-down"
                }`}
              ></i>
            </button>
            <ul
              className={`mobile-submenu ${
                openMobileSection === "pages" ? "open" : ""
              }`}
            >
              <li>
                <Link to="/about-us-1" onClick={closeMobileMenu}>
                  About Us 1
                </Link>
              </li>
              <li>
                <Link to="/about-us-2" onClick={closeMobileMenu}>
                  About Us 2
                </Link>
              </li>
              <li>
                <Link to="/about-us-3" onClick={closeMobileMenu}>
                  About Us 3
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faqs" onClick={closeMobileMenu}>
                  Faqs
                </Link>
              </li>
              <li>
                <Link to="/lookbook" onClick={closeMobileMenu}>
                  Lookbook
                </Link>
              </li>
              <li>
                <Link to="/sizeguide" onClick={closeMobileMenu}>
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/wishlist" onClick={closeMobileMenu}>
                  Wishlist
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a href={BUY_NOW_URL} onClick={closeMobileMenu}>
              Buy Now
            </a>
          </li>
        </ul>
      </aside>

      <CartOffcanvas isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <ProfileModal 
  isOpen={isProfileModalOpen} 
  onClose={() => setIsProfileModalOpen(false)} 
/>
    </header>
  );
};

export default Header;
