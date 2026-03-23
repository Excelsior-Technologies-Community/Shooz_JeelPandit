import React from "react";
import "./css/listItemOverlay.css";

const ListItemOverlay = () => {
  const OverlayPost = [
    {
      title: "The Future of Footwear: A Look Ahead",
      date: "October 28 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928",
    },
    {
      title: "Eco-Friendly Footwear: Sustainable Style",
      date: "October 28 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921",
    },
    {
      title: "How to Style Your Favorite Sneakers",
      date: "October 28 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=1080",
    },
    {
      title: "How to Style Your Favorite Sneakers",
      date: "October 28 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-4.png?v=1731500987&width=1080",
    },
    {
      title: "Finding the Perfect Fit: A Shoe Buying Guide",
      date: "October 28 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-3.png?v=1731500936&width=1080",
    },
    {
      title: "The Ultimate Guide to Sneaker Care",
      date: "October 28 2024",
      desc: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam...",
      img: "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=1728",
    },
  ];
  return (
    <>
      <div className="overlay-list">
        {OverlayPost.map((item, i) => (
          <div className="overlay-card" key={i}>
            <img src={item.img} alt="" />

            <div className="overlay-content">
              <p className="overlay-date">
                {item.date} &nbsp; • &nbsp; 0 Comments
              </p>

              <h2>{item.title}</h2>

              <p className="overlay-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListItemOverlay;
