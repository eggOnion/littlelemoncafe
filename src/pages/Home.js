import React from "react";

import HomeIntro from "./HomeIntro";
import HomeSpecial from "./HomeSpecial";
import HomeReview from "./HomeReview";
import HomeStory from "./HomeStory";

import "../styles/home.css";

function Home() {
  return (
    <main className="content-page">
      <HomeIntro />
      <HomeSpecial />
      <HomeReview />
      <HomeStory />
    </main>
  );
}

export default Home;
