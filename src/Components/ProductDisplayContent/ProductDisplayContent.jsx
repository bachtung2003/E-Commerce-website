import React from "react";
import "./ProductDisplayContent.css";
import { Link } from "react-router-dom";

const ProductDisplayContent = ({ item }) => {
  console.log(item);
  const { name, id, price, image } = item;

  const handleClick = (e) => {
    const product = {
      id: id,
      name: name,
      price: price,
      quantity: 1,
      img: image,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(product);

    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += 1;
    } else {
      existingCart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <div>
      <div className="product-info-top">
        <h1 className="product-name">{name}</h1>
        <div className="product-price">
          VND {price.toLocaleString("en-US")}đ
        </div>
      </div>
      <div className="product-desc">
        Introducing GLASSIC stylish and durable glasses, designed for both
        fashion and function. Crafted with high-quality materials, these glasses
        offer superior clarity and comfort. Available in various frame styles
        and lens options, they cater to all tastes and needs. Whether for
        reading, screen protection, or sun shielding, our glasses provide a
        perfect blend of elegance and practicality. Elevate your vision with our
        cutting-edge eyewear.
      </div>
      <div className="detail-btn-wrap">
        <div className="detail-btn-list">
          <button type="submit" className="lab-btn" onClick={handleClick}>
            <span className="btn-text">Add to Cart</span>
          </button>
        </div>
        <div className="detail-btn-list">
          <Link to="/cart-page">
            <button type="submit" className="lab-btn bg-white">
              <span className="btn-text">Checkout</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayContent;
