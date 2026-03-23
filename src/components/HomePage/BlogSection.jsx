import React from "react";
import "./css/blogSection.css";
import { FaRegComment } from "react-icons/fa";

function BlogSection() {
  const featuredPost = {
    title: "The Future Of Footwear: A Look Ahead",
    date: "Oct 28 2024",
    comments: "0 comments",
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1512",
  };

  const posts = [
    {
      id: 1,
      title: "Eco-Friendly Footwear: Sustainable Style",
      date: "Oct 28 2024",
      comments: "0 comments",
      image:
        "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=540",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Sneaker Care",
      date: "Oct 17 2024",
      comments: "0 comments",
      image:
        "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=540",
    },
    {
      id: 3,
      title: "How to Style Your Favorite Sneakers",
      date: "Oct 17 2024",
      comments: "0 comments",
      image:
        "https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=540",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <p className="small-title">FROM THE BLOG</p>

        <h2 className="blog-title">Recently Our Posts</h2>

        <p className="desc">
          Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="blog-container">
        <article className="big-post">
          <img src={featuredPost.image} alt={featuredPost.title} />

          <div className="big-post-overlay"></div>

          <div className="big-post-text">
            <p className="post-meta">
              {featuredPost.date}
              <FaRegComment className="comment-icon" />
              {featuredPost.comments}
            </p>

            <h3>{featuredPost.title}</h3>
          </div>
        </article>

        <div className="small-posts">
          {posts.map((post) => (
            <article className="small-post" key={post.id}>
              <div className="small-img">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="small-text">
                <p className="post-meta post-meta-dark">
                  {post.date}
                  <FaRegComment className="comment-icon" />
                  {post.comments}
                </p>

                <h4>{post.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
