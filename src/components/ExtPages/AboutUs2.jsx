import React, { useEffect } from "react";
import "./css/aboutUs2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AboutUs2 = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); //scroll UP animation
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
  const data = [
    {
      id: 1,
      text: "Absolutely Loved It. The Fit, The Quality And The Color. This Is A Slim Fit Jean Like None Other And The Only One I Will Buy.",
      name: "—  Susan P.",
      img: "https://qx-shooz.myshopify.com/cdn/shop/files/testi2.jpg?v=1731662817&width=900",
    },
    {
      id: 2,
      text: "“ The most comfortable shoes ever!! I have them in 3 colors. And I am not done. ",
      name: "—  Jaycie Glove",
      img: "https://qx-shooz.myshopify.com/cdn/shop/files/testi4.jpg?v=1731662817&width=900",
    },
    {
      id: 3,
      text: " I love Lola! They're one of my favorite brands. Customer service is excellent. I have only returned items once and it was so easy. ",
      name: "—  Kai Felix",
      img: "https://qx-shooz.myshopify.com/cdn/shop/files/testi1.jpg?v=1731662817&width=900",
    },
  ];

  return (
    <div className="aboutus2-wrapper">
      {/* =========================== */}
      <div className="vid_banner animate-up">
        <video
          src="https://cdn.shopify.com/videos/c/o/v/4625c676b883437ebb9472d75b2f720c.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="vid_overlay" />
        <div className="vid_content">
          <p className="vid_kicker">★★★★★ 3000+ Reviews</p>
          <h2>For the Explorers.</h2>
          <p className="vid_subtitle">Weekends are better with friends</p>
        </div>
      </div>
      {/* =========================== */}
      <div className="text-banner animate-up">
        <h3>
          As a modern sexual wellness company built on quality, simplicity and
          inclusivity, we’re on a mission to make intimacy better—for all
          people.
        </h3>
        <button className="next">Button Next</button>
      </div>
      {/* ========================== */}
      <div className="mission-section animate-up">
        <div className="mission-left">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900"
            alt="mission"
          />
        </div>

        <div className="mission-right">
          <p className="mission-tag">OUR MISSION</p>

          <h2>
            We Pride <br />
            Ourselves
          </h2>

          <p className="mission-text">
            Some call Aarhus the world’s largest provincial town – we just call
            it home. At our spacious and industrial head quarter on the harbor
            we currently employ 50+ ambitious doers on a mission to form a
            healthy workspace and maintain and develop a strong business.
          </p>

          <button className="mission-btn">READ MORE</button>
        </div>
      </div>
      {/* ========================== */}

      <div className="mission-followup animate-up">
        <div className="mission-followup-inner">
          <div className="followup-cards">
            <article className="followup-card">
              <h4>Premium Quality</h4>
              <p>
                This text can be used to share information about your brand with
                customers.
              </p>
              <button className="followup-btn">BUTTON TEXT →</button>
            </article>
            <article className="followup-card">
              <h4>Unparalleled Prices</h4>
              <p>
                This text can be used to share information about your brand with
                customers.
              </p>
              <button className="followup-btn">BUTTON TEXT →</button>
            </article>
            <article className="followup-card">
              <h4>From the Source</h4>
              <p>
                Shopping on Italic means supporting a network of independent
                manufacturers.
              </p>
              <button className="followup-btn">BUTTON TEXT →</button>
            </article>
          </div>
        </div>
      </div>

      {/* ============================ */}
      <div className="testimonial-section animate-up">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          slidesPerView={1} // Add this
          spaceBetween={30} // Add this
          className="testimonial-swiper" // Add a custom class
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-container">
                {/* LEFT */}
                <div className="testimonial-left">
                  <p className="small-text">WONDERFUL !</p>
                  <div className="stars">★★★★★</div>

                  <h2 className="testimonial-text">“{item.text}”</h2>

                  <p className="author">— {item.name}</p>
                </div>

                {/* RIGHT */}
                <div className="testimonial-right">
                  <img src={item.img} alt="user" />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* NAV BUTTONS */}
          <div className="nav-buttons">
            <div className="custom-prev">‹</div>
            <div className="custom-next">›</div>
          </div>
        </Swiper>
      </div>

      {/* ================================== */}
      <div className="guarantee-section animate-up">
        <div className="guarantee-left">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=1080"
            alt="shoes"
          />
        </div>

        <div className="guarantee-right">
          <p className="guarantee-tag">SUSTAINABILITY</p>

          <h2>
            30+ Day <br /> Guarantee
          </h2>

          <p className="guarantee-text">
            We guarantee that every plant will arrive in good health, and all
            plants are guaranteed for 30 days after arrival. We take great pride
            in the care of our plants in our greenhouses as well as in the
            protective packaging we use to ship our plants.
          </p>

          <button className="guarantee-btn">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
