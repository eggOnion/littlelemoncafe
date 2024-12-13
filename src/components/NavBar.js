import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useNavBarContext } from "../contexts/NavBarContext";

import "../styles/navBar.css";

function NavBar() {
  const { isOpen, toggleField, handleLinkAndClose, fieldRef, selectedLink } =
    useNavBarContext();

  return (
    <div className="header-container">
      <div className="hamburger-icon" onClick={toggleField}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav>
        <div ref={fieldRef}>
          {/* Hamburger field - small screen */}
          <ul
            className={`hamburger-field ${isOpen ? "show" : ""}`}
            ref={fieldRef}
          >
            <li>
              <a
                href="/littlelemoncafe"
                className={selectedLink === "/littlelemoncafe" ? "selected" : ""}
                onClick={() => handleLinkAndClose("/littlelemoncafe")}
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="/menu"
                className={selectedLink === "menu" ? "selected" : ""}
                onClick={() => handleLinkAndClose("menu")}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={selectedLink === "booking" ? "selected" : ""}
                onClick={() => handleLinkAndClose("booking")}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className={selectedLink === "testimonials" ? "selected" : ""}
                onClick={() => handleLinkAndClose("testimonials")}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/orderOnline"
                className={selectedLink === "orderOnline" ? "selected" : ""}
                onClick={() => handleLinkAndClose("orderOnline")}
              >
                Order Online
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={selectedLink === "login" ? "selected" : ""}
                onClick={() => handleLinkAndClose("login")}
              >
                Login
              </Link>
            </li>
          </ul>

          {/*Normal Field - large screen */}
          <ul className="field">
            <li>
              <Link
                to="/menu"
                className={selectedLink === "menu" ? "selected" : ""}
                onClick={() => handleLinkAndClose("menu")}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className={selectedLink === "booking" ? "selected" : ""}
                onClick={() => handleLinkAndClose("booking")}
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className={selectedLink === "testimonials" ? "selected" : ""}
                onClick={() => handleLinkAndClose("testimonials")}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/orderOnline"
                className={selectedLink === "orderOnline" ? "selected" : ""}
                onClick={() => handleLinkAndClose("orderOnline")}
              >
                Order Online
              </Link>
            </li>           
            <li>
              <Link id="navbar-login-link"
                to="/login"
                className={selectedLink === "login" ? "selected" : ""}
                onClick={() => handleLinkAndClose("login")}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
