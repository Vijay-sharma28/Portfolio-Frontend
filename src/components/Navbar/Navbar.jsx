import React from "react";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [showNavbar, setShowNavbar] = useState(false)

  const menuItems = [
    { name: "Home", id: "#home" },
    { name: "About", id: "#about" },
    { name: "Skills", id: "#skills" },
    { name: "Education", id: "#education" },
    { name: "Projects", id: "#projects" },
    { name: "Contact", id: "#contact" }
  ];

  return (
    <div className="header">
      <div className="logo">
        <a href="#"><img src="../../resourses/logo.png" alt="" /></a>
      </div>

      <div className="nav-bar">
        <ul className={showNavbar ? "display-nav" : ""}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                className={active === item.name ? "active" : ""}
                onClick={() => {
                  setActive(item.name)
                  setShowNavbar(false);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setShowNavbar(!showNavbar)}>☰</button>
      </div>
    </div>
  );
};

export default Navbar;
