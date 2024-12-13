import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

import { useNavBarContext } from "../contexts/NavBarContext";

import "../styles/foodCard.css";

function FoodCard({ foodName, foodImg, imgCredit, foodDescription }) {
  const { isOpen, toggleField, handleLinkAndClose, fieldRef, selectedLink } =
  useNavBarContext();  

  return (
    <article className="special-foodcard">
      <div className="special-foodcard-layout">
        <div className="special-foodcard-img">
          <img src={foodImg} alt="lemon dessert cake" />
          <a
            href={imgCredit}
            target="_blank"
            rel="noopener noreferrer"
          >
            img credit
          </a>
        </div>
        <div className="special-foodcard-intro">
          <h2>{foodName}</h2>
          <div className="special-foodcard-description">
            <p>{foodDescription}</p>
          </div>
          <div className="special-order-online">
          <Link
                to="/orderOnline"
                className={selectedLink === "orderOnline" ? "selected" : ""}
                onClick={() => handleLinkAndClose("orderOnline")}
              >
                Order Online <FontAwesomeIcon icon={faMotorcycle} />
              </Link>
          </div>        
        </div>        
      </div>
     
    </article>
  );
}

export default FoodCard;
