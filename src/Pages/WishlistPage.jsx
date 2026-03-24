import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/HomePage/Header";
import FooterSimple from "../components/HomePage/FooterSimple";
import { useWishlist } from "../Context/useWishlist";
import "./css/wishlist.css";
import Breadcrumb from "../components/Breadcurms";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <Header />
      <Breadcrumb title="Wishlist Page"/>
      <section className="wishlist-page">
        <h1 className="wishlist-page__title">Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="wishlist-empty">
            <h2>Your wishlist is empty</h2>
            <p>Tap the heart icon on any product to save it here.</p>
            <Link to="/" className="wishlist-empty__link">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="wishlist-list">
            {wishlist.map((product) => (
              <article className="wishlist-item" key={product.id}>
                <Link to={`/product/${product.id}`} className="wishlist-item__image">
                  <img src={product.image} alt={product.title} />
                </Link>

                <div className="wishlist-item__content">
                  <Link to={`/product/${product.id}`} className="wishlist-item__title">
                    {product.title}
                  </Link>
                  <p className="wishlist-item__price">
                    ${Number(product.price).toFixed(2)}
                  </p>
                  <button
                    type="button"
                    className="wishlist-item__remove"
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <FooterSimple />
    </>
  );
};

export default WishlistPage;
