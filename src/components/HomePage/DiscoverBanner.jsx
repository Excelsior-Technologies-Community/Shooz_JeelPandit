import React from "react";
import "./css/discoverBanner.css";
import Marquee from "react-fast-marquee";

const DiscoverBanner = () => {
  return (
    <section className="discover-banner">
      <img
        className="discover-banner-image"
        src="https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552"
        alt="Sneaker lifestyle banner"
      />

      <div className="discover-banner-content">
        <p className="discover-banner-kicker">COMFORT MEETS FASHION</p>
        <h2 className="discover-banner-title">
          Discover shoes that look great
          <br />
          and feel even better
        </h2>
        <p className="discover-banner-description">
          Our collection features comfortable and stylish footwear designed to
          keep your feet happy all day long.
        </p>
        <button type="button" className="discover-banner-button">
          SHOP NOW
        </button>
      </div>
      <Marquee
        className="discover-banner-marquee"
        speed={42}
        pauseOnHover
        gradient={false}
        autoFill
      >
        <div className="marquee-line">
          <span className="marquee-item">
            Get 15% off your first purchase when you sign up. Code: NEWSHOES15
          </span>
          <span className="marquee-separator">|</span>
          <span className="marquee-item">
            Buy one pair, get the second pair 50% off. Code: BOGO50
          </span>
          <span className="marquee-separator">|</span>
          <span className="marquee-item">
            Enjoy 20% off your order with code: SHOEFRESH20
          </span>
        </div>
      </Marquee>
    </section>
  );
};

export default DiscoverBanner;
