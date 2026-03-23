import React from "react";
import "./css/seasonSale.css";

const products = [
  {
    name: "Classic White Tennis Sneakers",
    price: "$25.00",
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150",
  },
  {
    name: "Waterproof Hiking Boots",
    price: "$25.00",
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150",
  },
  {
    name: "Classic Leather Sneakers",
    price: "$21.00",
    image:
      "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150",
  },
];

function Product({ item }) {
  return (
    <div className="product-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

function SeasonSale() {
  return (
    <section className="sale-section">
      <p className="sale-small">SEASON'S END SALE</p>

      <h1 className="sale-title">Huge discounts on last season’s styles</h1>

      <p className="sale-desc">
        Himenaeos nascetur tristique consequat mus ad. Accumsan fringilla in
        laoreet id bibendum et.
      </p>

      <div className="product-grid">
        <div className="column">
          {products.slice(0, 3).map((item, i) => (
            <Product key={i} item={item} />
          ))}
        </div>

        <div className="column">
          {products.slice(0, 3).map((item, i) => (
            <Product key={i} item={item} />
          ))}
        </div>

        <div className="column">
          {products.slice(0, 3).map((item, i) => (
            <Product key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeasonSale;
