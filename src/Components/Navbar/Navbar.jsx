import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import menu from "../Assets/img/menu.png";
import cart from "../Assets/img/cart.png";
import { useSearchParams, Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="navbar">
      <div className="menu" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={menu} id="img-1" />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/aboutus"
            >
              <DropdownItem text={"ABOUT US"} />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/products"
            >
              <DropdownItem text={"PRODUCTS"} />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/stores"
            >
              <DropdownItem text={"STORES"} />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/services"
            >
              <DropdownItem text={"SERVICES"} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="logo">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          GLASSIC
        </Link>
      </div>
      <div className="cart">
        <img src={cart} id="img-2" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
  function DropdownItem(props) {
    const handleItemClick = () => {
      setOpen(false);
    };
    return (
      <li className="dropdownItem" onClick={handleItemClick}>
        <a> {props.text}</a>
      </li>
    );
  }
};

export default Navbar;
