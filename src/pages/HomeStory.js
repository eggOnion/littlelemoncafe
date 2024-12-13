import React from "react";

import chefPicONE from "../assets/images/Mario_and_Adrian_A.png";
import chefPicTWO from "../assets/images/Mario_and_Adrian_B.png";

import "../styles/homeStory.css";

function HomeStory() {
  return (
    <section className="home-story-section">
      <h1 className="story-heading">Our Story!</h1>

      <article className="story-story-container">
        <article className="story-story-layout">
          <div className="story-textual">
            <p>
              Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean<br />
              restaurant, focused on traditional recipes served with a modern twist. The
              <br /> 
              chefs draw inspiration from Italian, Greek, and Turkish culture and have<br /> 
              a menu of 12-15 items that they rotate seasonally. 
              <br />
              <br />
              The restaurant has a rustic and relaxed atmosphere with moderate<br />
              prices, making it a popular place for a meal any time of the day.
              <br />
              <br/>
              Owned by two Italian brothers, Mario and Adrianto the United States<br /> 
              to pursue their shared dream of owning a restaurant.
              <br />
              <br />
              Mario relies on family recipes and his experience as a chef in
              Italy, to craft
              <br />
              the menu
              <br />
              <br />
              Adrian does all the marketing for the restaurant and led the
              effort to
              <br />
              expand the menu beyond classic Italian to incorporate additional
              cuisines
              <br />
              from the Mediterranean region.
            </p>
          </div>

          <div className="story-chef-img-container">
            <img src={chefPicONE} alt="2 chefs, Mario and Adrian - 1" />
            <img src={chefPicTWO} alt="2 chefs, Mario and Adrian - 2" />
          </div>
        </article>
      </article>
    </section>
  );
}

export default HomeStory;
