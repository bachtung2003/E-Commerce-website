import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-section">
          <div className="footer-section-title">
            <p>Contact</p>
          </div>
          <div className="footer-group">
            <ul className="footer-items">
              <li className="footer-item">
                <a href="#">Email</a>
              </li>
              <li className="footer-item">
                <a href="#">Hotline</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-section-title">
            <p>Legal Notice</p>
          </div>
          <div className="footer-group">
            <ul className="footer-items">
              <li className="footer-item">
                <a href="#">Term of Use</a>
              </li>
              <li className="footer-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="footer-item">
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-section-title">
            <p>Social Media</p>
          </div>
          <div className="footer-group">
            <ul className="footer-items">
              <li className="footer-item">
                <a href="https://www.facebook.com/profile.php?id=100011546441626">
                  Facebook
                </a>
              </li>
              <li className="footer-item">
                <a href="https://www.instagram.com/_toppermost_">Instagram</a>
              </li>
              <li className="footer-item">
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 GLASSIC</p>
        <p>All rights reserved. TUNG Co., Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
