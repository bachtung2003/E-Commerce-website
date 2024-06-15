import React, { useState } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

export const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="widget widget-search">
      <form className="search-wrapper">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for items"
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>

      {/*showing search result*/}
      <div>
        {searchTerm &&
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <div className="products-search-section">
                <div>
                  <div className="pro-thumb">
                    <img
                      src={product.image}
                      alt=""
                      width={80}
                      className="product-image"
                    />
                  </div>
                </div>
                <div className="product-content">
                  <p>
                    <Link to={`/products/${product.id}`}>{product.name}</Link>
                  </p>
                  <h6>{product.price.toLocaleString("en-US")}đ</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
