import React from "react";
import { useNavigate } from "react-router-dom";

import { myIntro } from "../services/references";

import introFood from "../assets/images/intro_food.png";

import "../styles/homeIntro.css";

function HomeIntro() {
  const navigate = useNavigate();

  const handleReservation = () => {
    navigate("/booking");
  };

  return (
    <section className="home-intro-section">
      <article className="home-intro">
        <div className="intro-textual">         
          <h1 style={{ fontSize: "50px" }}>Little Lemon</h1>
          <h1 style={{ fontSize: "30px" }}>Chicago</h1>
          <br />
          <p>
            We are a family owned Mediterranean restaurant, located at <br />
            W Jackson Blvd Chicago, Illinois. We focused on traditional <br />
            recipes served with a modern twist.
          </p>
          <button className="reservation-button" onClick={handleReservation}>
            Reserve a Table
          </button>
        </div>
        <div className="intro-img-one">
          <img src={introFood} alt="food in the cafe" />
          <div className="intro-img-credit">
            <a
              href={myIntro.foodIntro}
              alt="intro food"
              target="_blank"
              rel="noopener noreferrer"
            >
              img credit
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeIntro;
