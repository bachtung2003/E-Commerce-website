import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./css/SingleProduct.css";
import data from "../Components/Assets/Product/all_product.js";
import ProductDisplayContent from "../Components/ProductDisplayContent/ProductDisplayContent.jsx";

const SingleProduct = () => {
  const product = data;
  const { id } = useParams();
  const result = product.filter((p) => p.id === parseInt(id));
  const endResult = result[0];
  return (
    <div className="detail-layout-container">
      <div className="detail-content">
        {/* detail images */}
        <div className="detail-imgs">
          {/* img section */}
          {endResult.images.map((item, i) => (
            <div key={i} className="detail-imgs-item">
              <div className="detail-imgs-content">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* detail contents */}
        <div className="product-info">
          <div className="product-info-content">
            {result.map((item) => (
              <ProductDisplayContent key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
