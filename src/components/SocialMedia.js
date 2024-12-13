import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/socialMedia.css";

function SocialMedia() {
  return (
    <ul className="social-media-icon">
      <li>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
