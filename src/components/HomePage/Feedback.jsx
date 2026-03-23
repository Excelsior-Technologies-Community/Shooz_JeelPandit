import React from "react";
import "./css/feedback.css";

const logos = [
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-1.png?v=1731499378&width=1920",
    alt: "Brand logo 1",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-2.png?v=1731499378&width=1920",
    alt: "Brand logo 2",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-3.png?v=1731499378&width=1920",
    alt: "Brand logo 3",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-5.png?v=1731499378&width=1920",
    alt: "Brand logo 4",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-6.png?v=1731499378&width=1920",
    alt: "Brand logo 5",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-7.png?v=1731499378&width=1920",
    alt: "Brand logo 6",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-8.png?v=1731499378&width=1920",
    alt: "Brand logo 7",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png?v=1731499378&width=1920",
    alt: "Brand logo 8",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-10.png?v=1731499378&width=1920",
    alt: "Brand logo 9",
  },
  {
    src: "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-11.png?v=1731499378&width=1920",
    alt: "Brand logo 10",
  },
];

function Feedback() {
  return (
    <section className="feedback-section">
      <div className="feedback-header">
        <h2>Customer Feedback Highlights</h2>
        <p>
          Laoreet ridiculus congue magna malesuada phasellus condimentum taciti
          mus primis.
        </p>
      </div>

      <div className="feedback-grid">
        {logos.map((logo, index) => (
          <div className="feedback-card" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
