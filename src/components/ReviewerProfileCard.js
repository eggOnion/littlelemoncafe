import React from "react";

import starCount from "../assets/images/reviewerPictures/starCount.png";

import "../styles/reviewerProfileCard.css";

function ReviewerProfileCard({
  reviewerPic,
  reviewerName,
  reviewerReview,
  starRating,
}) {
  
  const StarAwarded = ({ count }) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<img key={i} src={starCount} alt="star rating" />);
    }

    return <div className="review-star-count">{stars}</div>;
  };

  return (
    <article className="review-profilecard">
      <div className="review-profilecard-layout">
        <div className="review-profile-pic">
          <img src={reviewerPic} alt="reviewer's review" />
        </div>
        <div>    
          <StarAwarded count={starRating} />
        </div>
        <div className="review-reviewer-info">          
          <h2>{reviewerName}</h2>
          <div className="review-reviewer-feedback">
            <p> {reviewerReview}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReviewerProfileCard;
