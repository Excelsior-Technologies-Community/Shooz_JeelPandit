import React from "react";
import "./css/collectionType.css";

const CollectionType = () => {
  const collections = [
    {
      tag: "TRENDING",
      title: "Men Collections",
      img: "//qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920",
    },
    {
      tag: "LATEST",
      title: "Women Collections",
      img: "//qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920",
    },
    {
      tag: "COMFORT",
      title: "Kid Collections",
      img: "//qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920",
    },
  ];

  return (
    <section className="collection-section">
      <div className="collection-container">
        {collections.map((item, index) => (
          <div
            key={index}
            className="collection-card"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="collection-content">
              <span>{item.tag}</span>
              <h2>{item.title}</h2>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionType;
