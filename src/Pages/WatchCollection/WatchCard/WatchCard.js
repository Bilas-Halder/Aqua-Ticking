import React from 'react';
import './WatchCard.css';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";

const WatchCard = ({ watch }) => {
    const { title, img, price, rating, reviews, percentOff } = watch;
    return (
        <Col xs={12} md={6} lg={4} className="custom-col">

            <Card className="custom-card">
                <Card.Img className="custom-card-img" variant="top" src={img} />
                <Card.Body style={{ padding: '0px 1rem 1rem 1.5rem' }}>
                    <h5 style={{ fontSize: "1.1rem" }}>{title}</h5>

                    <div className="card-details">
                        <div>
                            <div className="rating-div reviews-rating-div ">
                                <Rating
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    showInactive={false}
                                    readonly
                                    initialRating={rating}
                                />
                                <span className="review-count"> ( {reviews} ) </span>
                            </div>

                            <p className="price">
                                {
                                    percentOff ? percentOff >= 100 ? <span className="free">Free</span> : `$${(price - ((price * percentOff) / 100)).toFixed(2)}` : price.toFixed(2)
                                }
                                {
                                    percentOff ?
                                        <span className="cut-price">( ${price.toFixed(2)} )</span> : ""
                                }
                            </p>
                        </div>

                        <button className="primary-btn card-btn">Buy Now</button>

                    </div>

                </Card.Body>
            </Card>

            {
                percentOff > 0 ? <div className="sale-circle">
                    {percentOff < 100 ? `${percentOff.toFixed(1)}%` : "Free"}
                </div> : ""
            }
        </Col>
    );
};

export default WatchCard;