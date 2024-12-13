import React from "react";
import { Link } from "react-router-dom";

import { useNavBarContext } from "../contexts/NavBarContext";
import { myFoodCard } from "../services/references";

import FoodCard from "../components/FoodCard";

import steakWfries from "../assets/images/specials/steakWfries.png";
import pastaWduck from "../assets/images/specials/pastaWsmokedduck.png";
import lemonDessert from "../assets/images/specials/lemonDessert.png";

import "../styles/homeSpecial.css";

function HomeSpecial() {
  const { handleLinkAndClose, selectedLink } = useNavBarContext();

  return (
    <section className="home-special-section" id="home-special-section">
      <h1 className="special-heading">Our Specials!</h1>

      <article className="special-foodcard-container">
        <FoodCard
          foodName={"Pasta w/Smoked Duck"}
          foodImg={pastaWduck}
          imgCredit={myFoodCard.foodCardONE.imgCredit}
          foodDescription={myFoodCard.foodCardONE.description}
        />
        <FoodCard
          foodName={"Ribeye w/Duck Fat Fries"}
          foodImg={steakWfries}
          imgCredit={myFoodCard.foodCardTWO.imgCredit}
          foodDescription={myFoodCard.foodCardTWO.description}
        />
        <FoodCard
          foodName={"Lemon Crème Brûlée"}
          foodImg={lemonDessert}
          imgCredit={myFoodCard.foodCardTHREE.imgCredit}
          foodDescription={myFoodCard.foodCardTHREE.description}
        />
      </article>

      <div className="special-menu-view">
        <Link
          id="menu-button"
          to="/menu"
          className={selectedLink === "menu" ? "selected" : ""}
          onClick={() => handleLinkAndClose("menu")}
        >
          View our Menu
        </Link>
      </div>
    </section>
  );
}

export default HomeSpecial;
