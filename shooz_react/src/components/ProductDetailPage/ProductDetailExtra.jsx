import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../../../Products.json";
import "./css/productDetailExtra.css";

function ProductDetailExtra() {
  const { id } = useParams();
  const currentId = Number(id);
  const [activeTab, setActiveTab] = useState("description");

  const relatedProducts = useMemo(() => {
    const currentProduct = productsData.find((p) => p.id === currentId);
    const sameCategory = currentProduct
      ? productsData.filter(
          (p) => p.id !== currentId && p.category === currentProduct.category,
        )
      : [];
    const fallback = productsData.filter((p) => p.id !== currentId);
    const list = sameCategory.length > 0 ? sameCategory : fallback;
    return list.slice(0, 2);
  }, [currentId]);

  return (
    <section className="product-extra">
      <div className="product-extra-left">
        <div className="product-tabs">
          <button
            type="button"
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            type="button"
            className={activeTab === "material" ? "active" : ""}
            onClick={() => setActiveTab("material")}
          >
            Material
          </button>
          <button
            type="button"
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="tab-panel">
          {activeTab === "description" && (
            <>
              <p>
                Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
                mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum
                nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.
                Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam
                nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat,
                pede.
              </p>
              <p>
                Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in
                justo pellentesque facilisis. Etiam imperdiet imperdiet orci.
                Nunc nec neque. Phasellus leo dolor, tempus non, auctor et,
                hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non,
                euismod vitae, posuere imperdiet, leo. Maecenas malesuada.
              </p>
              <p>
                Praesent congue erat at massa. Sed cursus turpis vitae tortor.
                Donec posuere vulputate arcu. Phasellus accumsan cursus velit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue,
                elit erat euismod orci, ac placerat dolor lectus quis orci.
                Phasellus consectetuer vestibulum elit. Aenean tellus metus,
                bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla
                pede sit amet augue. In turpis. Pellentesque posuere.
              </p>
            </>
          )}

          {activeTab === "material" && (
            <>
              <p></p>
              <p></p>
            </>
          )}

          {activeTab === "reviews" && (
            <>
              <p></p>
            </>
          )}
        </div>
      </div>

      <aside className="product-extra-right">
        <h3>Related products</h3>
        <div className="related-grid">
          {relatedProducts.map((product) => (
            <div className="related-card" key={product.id}>
              <Link to={`/product/${product.id}`} className="related-image">
                <img src={product.image} alt={product.title} />
              </Link>
              <div className="related-info">
                <Link to={`/product/${product.id}`} className="related-title">
                  {product.title}
                </Link>
                <p className="related-price">
                  ${Number(product.price).toFixed(2)}
                </p>
                <button type="button" className="related-add">
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>

      <div className="bg_img">
        <img
          src="https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695"
          alt="Chic fashion collection"
        />
        <div className="img_text">
          <p>Effortless Fashion, Every Day</p>
          <h1>Chic Styles for the Modern Woman</h1>
          <p>
            Embrace effortless elegance with our curated collection of chic
            styles designed for the modern woman. From desk to dinner, our
            fashion pieces effortlessly transition with you. Unlock exclusive
            offers and redefine your daily style with ease.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailExtra;
