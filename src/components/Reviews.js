import React from 'react';


const Reviews = (props) => {
    return (<div className="reviews">

        {props.reviews.map((review, index) => {
            return (
                <div className="reviews__wrapper" key={index}>
                    <div className="reviews__left">
                        <div className="reviews__feedback">
                            {review.positive ? "+" : "-"}
                        </div>
                    </div>
                    <div className="reviews__right">
                        <h3 className="reviews__name">{review.name}</h3>
                        <p className="reviews__comment">{review.comment}</p>
                    </div>
                </div>
            )
        })}
    </div>);
}

export default Reviews;