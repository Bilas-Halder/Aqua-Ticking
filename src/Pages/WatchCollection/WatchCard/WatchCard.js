import React from 'react';
import './WatchCard.css';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';

const WatchCard = ({ watch, order, all, manage, product }) => {
    const { title, img, price, rating, reviews, percentOff, _id } = watch;
    const { orders, setOrders, dbURL, products, setProducts } = useAuth();
    const [status, setStatus] = useState(false);
    useEffect(() => setStatus(order?.status === "Shipped" ? true : false), []);


    const handleCancel = (del) => {
        let msg = "Do you want to cancel this Order";
        if (del === "Delete") {
            msg = "Do you really want to Delete this Order";
        }
        if (window.confirm(msg)) {
            console.log(order._Id);

            fetch(`${dbURL}/orders/${order._id}`, {
                method: 'DELETE'
            }).then(response => {
                return response.json()
            }).then((d) => {
                const tempOrders = orders.filter(od => od._id !== order._id);
                setOrders(tempOrders);
            });

        }
    };
    const handleShipped = () => {
        fetch(`${dbURL}/allOrders/shipped/${order._id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(() => {
                setStatus(true);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const handleDeleteProduct = () => {
        if (window.confirm("Do you really want to Delete this product")) {

            fetch(`${dbURL}/product/${product._id}`, {
                method: 'DELETE'
            }).then(response => {
                return response.json()
            }).then((d) => {
                const tempPd = products.filter(pd => pd._id !== product._id);
                setProducts(tempPd);
            });

        }
    }


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
                                    percentOff ? percentOff >= 100 ? <span className="free">Free</span> : `$${(price - ((price * percentOff) / 100)).toFixed(2)}` : `$${price.toFixed(2)}`
                                }
                                {
                                    percentOff ?
                                        <span className="cut-price">( ${price.toFixed(2)} )</span> : ""
                                }
                            </p>
                        </div>

                        {
                            order ? !all && <button onClick={handleCancel} className="primary-btn card-btn">Cancel</button>
                                : manage ? <button onClick={handleDeleteProduct} className="primary-btn card-btn">Delete</button>
                                    : <NavLink to={`/buyNow/${_id}`} className="primary-btn card-btn">Buy Now</NavLink>
                        }
                        {
                            status && <button onClick={handleCancel} className="primary-btn card-btn">Delete</button>
                        }
                    </div>
                    {
                        all && !status ? <div className={`all-order-btns`}>
                            <button onClick={handleCancel} className="primary-btn">Delete</button>
                            {
                                !status && <button onClick={handleShipped} className="primary-btn">Shipped</button>
                            }
                        </div> : ""
                    }

                </Card.Body>
            </Card>

            {
                percentOff > 0 && !all && !order ? <div className="sale-circle">
                    {percentOff < 100 ? `${percentOff.toFixed(1)}%` : "Free"}
                </div> : status ? <div className="shipped">Shipped</div> : ""
            }
        </Col>
    );
};

export default WatchCard;