import React from 'react';
import './Review.css';
import Rating from "react-rating";

const Review = ({ review }) => {
    const { img, displayName, rating, reviewMsg } = review;
    return (
        <div className="review-card">
            {
                console.log(review)
            }
            <div className="main-review">
                <div>
                    <div className="review-img-div">
                        <div className="review-img-div2">
                            {
                                img ? <img className="review-img" src={img} /> :
                                    <div className="review-name-text">
                                        <div>{displayName[0]}</div>
                                    </div>
                            }
                        </div>

                    </div>
                    <p className="reviewer-name">
                        {displayName}
                    </p>
                    <div className="rating-div" style={{ fontSize: "1rem" }}>
                        <Rating
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            showInactive={false}
                            readonly
                            initialRating={rating}
                        />
                    </div>
                    <p className="review-msg">
                        {reviewMsg}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Review;