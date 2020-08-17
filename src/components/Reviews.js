import React from "react";

const Reviews = ({ positive, name, comment }) => {
  return (
    <div className="reviews__wrapper">
      <div className="reviews__left">
        <div className="reviews__feedback">{positive ? "+" : "-"}</div>
      </div>
      <div className="reviews__right">
        <h3 className="reviews__name">{name}</h3>
        <p className="reviews__comment">{comment}</p>
      </div>
    </div>
  );
};

export default Reviews;
