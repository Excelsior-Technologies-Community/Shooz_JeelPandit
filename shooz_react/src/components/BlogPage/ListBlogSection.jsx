import React from "react";
import "./css/listblogSection.css";

const posts = [
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
];

function ListBlogSection() {
  return (
    <div className="list-blog-page">
      <div className="blog-container">
        {/* LEFT SIDEBAR */}
        <div className="sidebar">
          <h4>About Author</h4>

          <img
            src="https://cdn.shopify.com/s/files/1/0415/5382/1854/files/feat13.jpg?v=1596818131"
            className="author-img"
            alt=""
          />

          <p className="author-text">
            Etiam vel magna sed leo feugiat cursus. Cras mollis blandit dolor.
            Praesent vulputate justo quis volutpat pharetra.
          </p>

          <h4 className="recent-title">Recent Post</h4>

          {posts.slice(0, 2).map((item, i) => (
            <div className="recent-item" key={i}>
              <img src={item.img} alt="" />
              <div>
                <p className="small-date">OCT 28 2024</p>
                <p className="small-title">{item.title}</p>
              </div>
            </div>
          ))}
          {/* TAGS */}
          <h4 className="tags-title">Tags</h4>

          <div className="tags">
            <span>All</span>
          </div>

          <div className="promo">
            <img
              src="https://cdn.shopify.com/s/files/1/1430/7398/files/b_blog.jpg?v=1666166584"
              alt=""
            />
          </div>
        </div>

        {/* RIGHT BLOG LIST */}
        <div className="blog-list">
          {posts.map((item, i) => (
            <div className="blog-card" key={i}>
              <div className="img-box">
                <img src={item.img} alt="" />
              </div>

              <div className="blog-content">
                <p className="date">{item.date}</p>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListBlogSection;
