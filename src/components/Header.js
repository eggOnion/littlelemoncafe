import React, { useState, useEffect } from "react";

import SocialMedia from "./SocialMedia";
import NavBar from "./NavBar";

import logo from "../assets/images/header.png";

import "../styles/header.css";

function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    // Listen for the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{ transition: "top 0.3s", top: isHeaderVisible ? "0" : "-100px" }}
    >
      <div className="header-container">
        <a href="/" id="logo">
          <img src={logo} alt="cafe logo" />
        </a>
        <nav>
          <NavBar />
          <p className="pipe-icon">|</p>
          <ul className="social-media">
            <SocialMedia />
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
