import React from "react";
import "./css/footer.css";

const Footer = () => {
  return (
    <>
      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-left">
          <h2>SUBSCRIBE TO OUR NEWS ARTICALS</h2>

          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="newsletter-right">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg?v=1731408076&width=1920"
            alt="shoe"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>INFORMATION</h4>
            <ul>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>My Account</li>
              <li>My Cart</li>
              <li>Size Chart</li>
              <li>Wishlist</li>
              <li>Gift Card</li>
            </ul>
          </div>

          <div className="footer-col footer-center">
            <h2 className="logo">
              <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360" />
            </h2>
            <p>T: + (08) 9055 0269</p>
            <p>E: example@example.com</p>
            <p>
              50 Porana Place, West Casuarinas,
              <br />
              Western Australia, Australia.
            </p>
          </div>

          <div className="footer-col">
            <h4>CATEGORIES</h4>
            <ul>
              <li>Athletic Footwear</li>
              <li>Boots for Every Occasion</li>
              <li>Luxury Leather Shoes</li>
              <li>Sandals & Slides</li>
              <li>Sneakerhead’s Haven</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SUPPORT</h4>
            <ul>
              <li>Contact Us</li>
              <li>Newsletter</li>
              <li>Gift Cards</li>
              <li>Sign In</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>

        {/* payment part */}
        <div className="footer-bottom">
          <p>Copyright © 2024 Shooz. All rights reserved</p>

          <div className="payment-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" />
            <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
