import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/images/logo_footer.png";
import SocialMedia from "./SocialMedia";
import { useNavBarContext } from "../contexts/NavBarContext";

import "../styles/footer.css";
import TermAndCondition from "./TermAndCondition";

function Footer() {
  const { handleLinkAndClose } = useNavBarContext();

  return (
    <footer>
      <div className="logo-left">
        <a href="/littlelemoncafe">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="text-info-right">
        <ul className="list-left">
          <li>
            <Link to="/menu" onClick={() => handleLinkAndClose("menu")}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => handleLinkAndClose("booking")}>
              Reservation
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={() => handleLinkAndClose("testimonials")}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="/orderOnline"
              onClick={() => handleLinkAndClose("orderOnline")}
            >
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => handleLinkAndClose("login")}>
              Login
            </Link>
          </li>
        </ul>
        <ul className="list-middle">
          <h1>Contact</h1>
          <li>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ marginRight: "10px" }}
            />
            2333 W Jackson Blvd Chicago, Illinois(IL), 60612
          </li>
          <li>
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ marginRight: "10px" }}
            />
            (312) 455-9213
          </li>
          <li>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "10px" }}
            />
            info@littlelemon.com
          </li>
        </ul>

        <ul className="list-right">
          <h1>Connect with us</h1>
          <div style={{ position: "relative", right: "1px" }}>
            <SocialMedia />
          </div>
        </ul>
      </div>
      <div className="copyright-btm">
        <p>
          <TermAndCondition />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
