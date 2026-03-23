import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "./css/heroImg.css";

const HeroImg = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      className="heroSwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "url('https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553')",
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <span>STEP INTO STYLE</span>
              <h1>Discover The Latest Trends In Footwear</h1>
              <p>
                From classic sneakers to trendy boots, our collection has
                something for everyone.
              </p>
              <button className="hero-btn">SHOP NOW →</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "url('https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552')",
          }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <span>NEW ARRIVALS</span>
              <h1>Find the perfect pair of shoes to complete.</h1>
              <p>
                Explore our wide range of styles, colors, and <br />
                materials to find the perfect shoes for any occasion.
              </p>
              <button className="hero-btn">SHOP NOW →</button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div
          className="hero-slide"
          style={{
            backgroundImage:
              "url('https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045552')",
          }}
        >
          <div className="hero-overlay left-content">
            <div className="hero-content">
              <span>LIMITED OFFER</span>
              <h1>Discover shoes that look great and feel even better.</h1>
              <p>
                Our collection features comfortable and stylish footwear
                <br /> designed to keep your feet happy all day long.
              </p>
              <button className="hero-btn">SHOP NOW →</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroImg;
