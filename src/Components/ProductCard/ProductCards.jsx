import React from "react";
import "./ProductCards.css";
import { Link } from "react-router-dom";

const ProductCards = ({ gridList, products }) => {
  return (
    <div className={`shop-product-wrap ${gridList ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={i} className="product-items">
          <div className="product-item">
            {/* product image */}
            <div className="product-thumb">
              <div className="pro-thum">
                <img src={product.image} alt="" />
              </div>
              <div className="product-action-link">
                <div>{product.name}</div>
                <div>{product.price.toLocaleString("en-US")}đ</div>
                <div className="navigator-icon">
                  <Link to={`/products/${product.id}`}>
                    <i>see more</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="product-list-item"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
