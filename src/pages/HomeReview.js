import React from "react";
import { Link } from "react-router-dom";

import { useNavBarContext } from "../contexts/NavBarContext";
import { myReview } from "../services/references";

import ReviewerProfileCard from "../components/ReviewerProfileCard";
import reviewerONE from "../assets/images/reviewerPictures/reviewer1.png";
import reviewerTWO from "../assets/images/reviewerPictures/reviewer2.png";
import reviewerTHREE from "../assets/images/reviewerPictures/reviewer3.png";
import reviewerFOUR from "../assets/images/reviewerPictures/reviewer4.png";

import "../styles/homeReview.css";

function HomeReview() {
  const { handleLinkAndClose, selectedLink } = useNavBarContext();

  return (
    <section className="home-review-section">
      <h1 className="review-heading">What people say about us!</h1>

      <article className="review-profilecard-container">
        <ReviewerProfileCard
          reviewerPic={reviewerONE}
          reviewerName={"Mr Wick"}
          reviewerReview={myReview.reviewerONE}
          starRating={5}
        />
        <ReviewerProfileCard
          reviewerPic={reviewerTWO}
          reviewerName={"Gianna Antonioa"}
          reviewerReview={myReview.reviewerTWO}
          starRating={4}
        />
        <ReviewerProfileCard
          reviewerPic={reviewerTHREE}
          reviewerName={"Santino Antonio"}
          reviewerReview={myReview.reviewerTHREE}
          starRating={5}
        />
        <ReviewerProfileCard
          reviewerPic={reviewerFOUR}
          reviewerName={"Halle Berry"}
          reviewerReview={myReview.reviewerFOUR}
          starRating={4}
        />
      </article>

      <div className="review-show-more">
        <Link
          id="testimonials-button"
          to="/testimonials"
          className={selectedLink === "testimonials" ? "selected" : ""}
          onClick={() => handleLinkAndClose("testimonials")}
        >
          More Testimonials
        </Link>
      </div>
    </section>
  );
}

export default HomeReview;
