import React from "react";
import "./StoreAddress.css";
import img_1 from "../Assets/img/store-1.jpeg";
import img_2 from "../Assets/img/store-2.jpeg";
import img_3 from "../Assets/img/store-3.jpeg";

const StoreAddress = () => {
  return (
    <div className="store-address">
      <div className="store-container">
        <div className="store-text">
          <h2 className="heading">HỒ CHÍ MINH, VN</h2>
          <div className="detail-address">
            <p>
              <strong>Vietnam Flagship Store</strong>
            </p>
            <p>11 Đ. Sư Vạn Hạnh, Phường 12, Quận 10</p>
            <p>Monday - Sunday</p>
            <p>9.00 AM - 10.00 PM</p>
          </div>
          <h2 className="heading">OREGON, US</h2>
          <div className="detail-address">
            <p>
              <strong>Oregon Flagship Store</strong>
            </p>
            <p>1107 NE Burnside Rd, Gresham</p>
            <p>Monday - Sunday</p>
            <p>9.00 AM - 10.00 PM</p>
          </div>
          <h2 className="heading">NAGANO, JP</h2>
          <div className="detail-address">
            <p>
              <strong>Japan Flagship Store</strong>
            </p>
            <p>1 Chome-29-3 Asamaonsen, Matsumoto</p>
            <p>Monday - Sunday</p>
            <p>9.00 AM - 10.00 PM</p>
          </div>
        </div>
        <div className="store-gallery">
          <div id="store-img">
            <img src={img_1} alt="" />
          </div>
          <div id="store-img">
            <img src={img_2} alt="" />
          </div>
          <div id="store-img">
            <img src={img_3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreAddress;
