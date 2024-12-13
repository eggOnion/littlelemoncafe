import React from "react";

import chefPicONE from "../assets/images/Mario_and_Adrian_A.png";
import chefPicTWO from "../assets/images/Mario_and_Adrian_B.png";

import { myStory } from "../services/references";

import "../styles/homeStory.css";

function HomeStory() {
  return (
    <section className="home-story-section">
      <h1 className="story-heading">Our Story!</h1>

      <article className="story-story-container">
        <article className="story-story-layout">
          <div className="story-textual">
            <div className="story-textual-story">
              <p>{myStory.storySectionONE}</p>
              <br />
              <p>{myStory.storySectionTWO}</p>
              <br />
              <p>{myStory.storySectionTHREE}</p>
              <br />
              <p>{myStory.storySectionFOUR}</p>
              <br />
              <p>{myStory.storySectionFIVE}</p>            
            </div>
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
