import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./css/slider.css";

function SliderSwiper() {
  const slides = [
    {
      title: "The Future of Footwear: A Look Ahead",
      date: "October 17, 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1728",
    },
    {
      title: "Eco-Friendly Footwear: Sustainable Style",
      date: "October 17, 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=1728",
    },
    {
      title: "The Ultimate Guide to Sneaker Care",
      date: "March 10, 2025",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate....",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=1728",
    },
  ];
  return (
    <div className="slider-wrapper">
      <div className="custom-prev">‹</div>
      <div className="custom-next">›</div>

      <Swiper
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        grabCursor={true}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <div className="content">
                <p className="tag">FEATURED POST</p>
                <h2>{item.title}</h2>
                <p className="meta">{item.date} · 0 Comments</p>
                <p className="desc">{item.desc}</p>
                <button>READ MORE →</button>
              </div>

              <div className="image">
                <img src={item.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderSwiper;
