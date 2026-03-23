import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./css/aboutUs1.css";

import { FiGift, FiHeadphones, FiRefreshCw, FiTruck } from "react-icons/fi";

const AboutUs1 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <div className="aboutus1-wrapper">
      <div className="fashion-container">
        <div className="left-side">
          <p>FALL INTO FASHION</p>
          <h1>Upgrade Your Wardrobe for the Season</h1>
          <button className="shop-now">Shop Now</button>
        </div>

        <div className="right-side">
          <img src="https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=1296" />
        </div>
      </div>

      {/* ===================================== */}

      <div className="clasic_container">
        <div className="left_side">
          <img
            className="faq_img_main"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900"
            alt="Athlete tying shoe"
          />
          <button
            type="button"
            className="video_btn"
            onClick={openVideo}
            aria-label="Watch video"
          >
            ▶
          </button>
          <img
            className="faq_img_overlay"
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=720"
            alt="Runner tying shoelaces"
          />
        </div>
        <div className="right_side">
          <p>Classic Meets Contemporary</p>
          <h3>Timeless Styles with a Modern Edge</h3>
          <p>
            Experience the best of both worlds with our collection that
            seamlessly blends timeless classics with modern twists. Elevate your
            wardrobe with pieces that stand the test of time while embracing the
            latest fashion innovations. Shop now for exclusive discounts.
          </p>
          <button className="discover">Discover Now</button>
        </div>
      </div>
      {isVideoOpen && (
        <div className="video-modal" onClick={closeVideo}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-video"
              onClick={closeVideo}
              aria-label="Close video"
            >
              ✕
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      {/* =========================== */}

      <div className="facility_explore">
        <div className="facility">
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiTruck />
            </span>
            <h4>Free Shipping</h4>
            <p>From all orders over $100</p>
          </div>
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiHeadphones />
            </span>
            <h4>Quality Support</h4>
            <p>24/7 online feedback</p>
          </div>
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiRefreshCw />
            </span>
            <h4>Return & Refund</h4>
            <p>Return money within 30 days</p>
          </div>
          <div className="list_facility">
            <span className="facility_icon" aria-hidden="true">
              <FiGift />
            </span>
            <h4>Gift Voucher</h4>
            <p>20% off when you shop online</p>
          </div>
        </div>
      </div>

      {/* ======================= */}
      <div className="style_section">
        <div className="style_left">
          <p className="style_tag">UNLEASH YOUR UNIQUE STYLE</p>
          <h2>Timeless Elegance, Modern Flair</h2>
          <p className="style_desc">
            Indulge in the fusion of timeless classics and modern flair. Our
            curated selection brings you sophistication with a contemporary
            twist. Shop now to redefine your style and enjoy exclusive offers on
            the latest fashion essentials.
          </p>

          <img
            className="style_small_img"
            src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/filler6.png?v=1731662117"
            alt="shoe"
          />
        </div>

        <div className="style_right">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler5.png?v=1731661778&width=1080"
            alt="people"
          />
        </div>
      </div>

      {/* =========================== */}
      <div className="testimonial_section">
        <div className="testimonial-slider-wrapper">
          <button
            className="swiper-nav prev swiper-button-prev"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {/* ===== CARD 1 ===== */}
            <SwiperSlide>
              <div className="testimonial_card">
                <div className="user_info">
                  <img
                    src="http://qx-shooz.myshopify.com/cdn/shop/files/testi1.jpg?v=1731662817&width=300"
                    alt="user"
                  />
                  <div>
                    <h4>Emily Johnson</h4>
                    <p>Fashion Enthusiast</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>

                <h3>Perfect !</h3>
                <p className="review">
                  "I've shopped at many online fashion stores, but Gluck is
                  truly exceptional. Their quality and style are unmatched. I
                  keep coming back for more!"
                </p>
              </div>
            </SwiperSlide>

            {/* ===== CARD 2 ===== */}
            <SwiperSlide>
              <div className="testimonial_card">
                <div className="user_info">
                  <img
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/testi2.jpg?v=1731662817&width=300"
                    alt="user"
                  />
                  <div>
                    <h4>David Smith</h4>
                    <p>Trendsetter</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>

                <h3>Awesome !</h3>
                <p className="review">
                  "Gluck is my go-to for the latest fashion trends. Their
                  collection is always up-to-date, and the shopping experience
                  is a breeze. I recommend them to all my friends."
                </p>
              </div>
            </SwiperSlide>

            {/* ===== CARD 3 ===== */}
            <SwiperSlide>
              <div className="testimonial_card">
                <div className="user_info">
                  <img
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/testi3.jpg?v=1731662817&width=300"
                    alt="user"
                  />
                  <div>
                    <h4>Sarah Anderson</h4>
                    <p>Fashion Blogger</p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>

                <h3>Amazing !</h3>
                <p className="review">
                  "I've had the pleasure of collaborating with Gluck multiple
                  times. Their commitment to style and quality is evident in
                  every piece they offer."
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <button
            className="swiper-nav next swiper-button-next"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* =========================================== */}
      <div className="map_section">
        <iframe
          src="https://www.google.com/maps?q=Copley%20South%20Australia&output=embed"
          className="map_iframe"
          title="map"
        ></iframe>

        <div className="map_card">
          <h2>Our store</h2>
          <p>Copley,</p>
          <p>South Australia 5732</p>

          <p>Mon - Fri, 10am - 9pm</p>
          <p>Saturday, 11am - 9pm</p>
          <p>Sunday, 11am - 5pm</p>

          <a
            href="https://www.google.com/maps?q=Copley%20South%20Australia"
            target="_blank"
            rel="noreferrer"
            className="direction_btn"
          >
            GET DIRECTIONS
          </a>
        </div>
      </div>

      {/* =============================================== */}
      <div className="contact_section">
        <p className="contact_small">QUESTIONS?</p>
        <h2>Send us an email</h2>

        <form className="contact_form">
          <div className="row">
            <input type="text" placeholder="Name" className="col" />
            <input type="email" placeholder="Email *" className="col" />
          </div>

          <div className="full_row">
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="full_row">
            <textarea placeholder="Message"></textarea>
          </div>

          <button type="submit" className="send_btn">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutUs1;
