import React from "react";
import "./css/popularStyles.css";

function PopularStyles() {
  return (
    <section className="popular-section">
      <div className="popular-container">
        <div className="popular-text">
          <p className="popular-small">OUR MOST POPULAR STYLES</p>

          <h1 className="popular-title">
            Save big on shoes <br /> from last season
          </h1>

          <p className="popular-desc">
            Morbi natoque id finibus natoque sapien turpis elementum maximus.
            Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
            Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est
            habitant lacus sagittis vitae.
          </p>

          <p className="popular-desc">
            Molestie dolor mus vitae penatibus sed lectus convallis ut neque.
            Leo elementum euismod penatibus cras sociosqu aliquet tellus.
          </p>

          <button className="shop-btn">SHOP NOW -&gt;</button>
        </div>

        <div className="popular-images">
          <img
            className="img-left"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/video-pic.png?v=1731407733&width=1512"
            alt="Blue sneakers"
          />
        </div>
      </div>

      <div className="store-banner">
        <p>Discover Our Stores: Your Local Shoe Haven</p>
        <button type="button">FIND STORE</button>
      </div>
    </section>
  );
}

export default PopularStyles;
