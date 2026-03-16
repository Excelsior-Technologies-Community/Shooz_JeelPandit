﻿﻿import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  const BUY_NOW_URL = "https://qx-shooz.myshopify.com/collections/all";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSection(null);
  };

  const toggleMobileSection = (section) => {
    setOpenMobileSection((prev) => (prev === section ? null : section));
  };

  return (
    <header>
      {/* Top Bar */}
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

      {/* Navbar */}
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
            {/* Center Menu */}
            <ul className="navbar-nav mx-auto gap-4">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              {/* SHOP */}
              <li className="nav-item position-static">
                <a className="nav-link" href="#">
                  Shop <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="mega-menu">
                  <div className="container-fluid">
                    <div className="row px-5 py-5">
                      <div className="col-lg-2">
                        <h6 className="mega-title">Layout</h6>
                        <ul className="mega-links">
                          <li>
                            <Link to="/FilterSideBarPage">Filter Sidebar</Link>
                          </li>
                          <li>
                            <Link to="/FilterDrawerPage">Filter Drawer</Link>
                          </li>
                          <li>
                            <Link to="/FilterTopBarPage">Filter Top</Link>
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

              {/* PRODUCT */}
              <li className="nav-item position-static">
                <a className="nav-link" href="#">
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

              {/* BLOG */}
              <li className="nav-item position-static">
                <a className="nav-link" href="#">
                  Blog <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="mega-menu">
                  <div className="container-fluid">
                    <div className="row px-5 py-5 align-items-start">
                      <div className="col-lg-3">
                        <h6 className="mega-title">List Layout</h6>
                        <ul className="mega-links">
                          <li>Left Sidebar</li>
                          <li>Right Sidebar</li>
                          <li>List Item Basic</li>
                          <li>List Item Overlay</li>
                          <li>List Item Classic</li>
                        </ul>
                      </div>

                      <div className="col-lg-3">
                        <h6 className="mega-title">Grid Layout</h6>
                        <ul className="mega-links">
                          <li>Grid Left Sidebar</li>
                          <li>Grid Right Sidebar</li>
                          <li>Grid Item Basic</li>
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

              {/* PAGES */}
              <li className="nav-item position-relative pages-item">
                <a href="/pages" className="nav-link">
                  Pages <i className="bi bi-chevron-down small"></i>
                </a>

                <div className="pages-dropdown">
                  <ul className="pages-menu-list">
                    <li>
                      <a href="/about-us-1">About Us 1</a>
                    </li>
                    <li>
                      <a href="/about-us-2">About Us 2</a>
                    </li>
                    <li>
                      <a href="/about-us-3">About Us 3</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/faqs">Faqs</a>
                    </li>
                    <li>
                      <a href="/lookbook">Lookbook</a>
                    </li>
                    <li>
                      <a href="/sizeguide">Size Guide</a>
                    </li>
                    <li>
                      <a href="/wishlist">Wishlist</a>
                    </li>
                  </ul>
                </div>
              </li>

              {/* BUY NOW */}
              <li className="nav-item position-relative">
                <a className="nav-link fw-semibold" href={"#"}>
                  Buy Now
                </a>
                <span className="badge bg-success sale-badge">Sale</span>
              </li>
            </ul>

            {/* Right Icons Desktop */}
            <div className="d-none d-lg-flex align-items-center gap-3 nav-icons">
              <i className="bi bi-search"></i>
              <i className="bi bi-person"></i>

              <div className="position-relative">
                <i className="bi bi-heart"></i>
                <span className="badge bg-danger icon-badge">0</span>
              </div>

              <div className="position-relative">
                <i className="bi bi-bag"></i>
                <span>(0)</span>
              </div>
            </div>
          </div>

          {/* Right Icons Mobile */}
          <div className="d-flex d-lg-none align-items-center gap-3 nav-icons mobile-nav-icons">
            <i className="bi bi-search"></i>
            <i className="bi bi-person"></i>

            <div className="position-relative">
              <i className="bi bi-heart"></i>
              <span className="badge bg-danger icon-badge">0</span>
            </div>

            <div className="position-relative">
              <i className="bi bi-bag"></i>
              <span>(0)</span>
            </div>
          </div>
        </div>
      </nav>

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
            <a href="#" onClick={closeMobileMenu}>
              Home
            </a>
          </li>

          <li>
            <button
              type="button"
              className="mobile-accordion-trigger"
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
              className={`mobile-submenu ${openMobileSection === "shop" ? "open" : ""}`}
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
              className="mobile-accordion-trigger"
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
              className={`mobile-submenu ${openMobileSection === "product" ? "open" : ""}`}
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
              className="mobile-accordion-trigger"
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
              className={`mobile-submenu ${openMobileSection === "blog" ? "open" : ""}`}
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
              className="mobile-accordion-trigger"
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
              className={`mobile-submenu ${openMobileSection === "pages" ? "open" : ""}`}
            >
              <li>
                <a href="/about-us-1" onClick={closeMobileMenu}>
                  About Us 1
                </a>
              </li>
              <li>
                <a href="/about-us-2" onClick={closeMobileMenu}>
                  About Us 2
                </a>
              </li>
              <li>
                <a href="/about-us-3" onClick={closeMobileMenu}>
                  About Us 3
                </a>
              </li>
              <li>
                <a href="/contact" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faqs" onClick={closeMobileMenu}>
                  Faqs
                </a>
              </li>
              <li>
                <a href="/lookbook" onClick={closeMobileMenu}>
                  Lookbook
                </a>
              </li>
              <li>
                <a href="/sizeguide" onClick={closeMobileMenu}>
                  Size Guide
                </a>
              </li>
              <li>
                <a href="/wishlist" onClick={closeMobileMenu}>
                  Wishlist
                </a>
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
    </header>
  );
};

export default Header;
