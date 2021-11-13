import React from 'react';
import './BuyNow.css';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import Rating from "react-rating";
import { BsFillBagPlusFill, BsFillBagDashFill } from "react-icons/bs";

const BuyNow = () => {
    const [watch, setWatch] = useState({});
    const { id } = useParams();
    const { user, dbURL } = useAuth();
    const [quantity, setQuantity] = useState(1);
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const postData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    };

    const onSubmit = async (data) => {
        data.watchId = watch?._id;
        data.email = user?.email;
        data.quantity = quantity;
        data.status = "Pending";
        data.watch = watch;

        const url = `${dbURL}/buyone`;
        await postData(url, data)
            .then(response => response.json())
            .then(d => {
                window.alert("Order will be placed soon.");
                history.push('/');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        fetch(`${dbURL}/watches/${id}`)
            .then(res => res.json())
            .then(data => {
                setWatch(data);
            });
    }, []);

    const plusClickHandler = () => {
        if (quantity < 99) {
            setQuantity(quantity + 1);
        }
    };
    const minusClickHandler = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <Header />
            <div>
                <Card className="bg-dark text-white buy-now-banner">
                    <div className="buy-now-banner-img-div">
                        <Card.Img className="buy-now-banner-img" src="https://i.ibb.co/hBLRNyr/buynow-bg.png" alt="Card image" />
                    </div>
                    <Card.ImgOverlay className="img-overlay">
                        <div>
                            <Card.Title className="buy-now-banner-title">Watch Details</Card.Title>
                        </div>
                    </Card.ImgOverlay>
                </Card>

                <div className="mt-5 pt-3 pt-lg-5">

                    <Container>
                        <Row>
                            <Col xm={12} sm={8} lg={8} className=''>
                                <div className="pe-0 pe-sm-1 mt-0 mt-lg-3">
                                    <div className="buy-now-watch-img-div">
                                        <img src={watch.img} alt="watch-img" className="buy-now-watch-img" />
                                    </div>

                                    <div className="mt-5 buying-watch-name-div justify-content-between align-items-center">
                                        <p className="color-p buying-watch-name">{watch.title}</p>

                                        <p className="mb-0 buying-watch-rating text-center">
                                            <div className="rating-div reviews-rating-div ">
                                                <Rating
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    showInactive={false}
                                                    readonly
                                                    initialRating={watch.rating}
                                                />
                                                <span className="review-count"> ( {watch.reviews} ) </span>
                                            </div>
                                        </p>
                                    </div>

                                    <div className="mt-4 buying-watch-price-div mb-5 mb-sm-0 justify-content-between align-items-center">
                                        <p className="buying-watch-price">${(watch.price - (watch.percentOff * watch.price / 100))}/<span>Per Watch</span></p>

                                        <p className="buying-watch-price">Total Price : ${((watch.price - (watch.percentOff * watch.price / 100)) * quantity).toFixed(2)}</p>
                                    </div>

                                </div>
                            </Col>


                            <Col xm={12} sm={4} lg={4} className=''>
                                <div className="buying-form-div text-center p-4">
                                    <h4>Buy This Watch</h4>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <input className="form-input" value={user.displayName} required  {...register("name")} placeholder="Full Name" />

                                        <input className="form-input" value={user.email} required  {...register("email")} placeholder="Email" />

                                        <input className="form-input" required {...register("phone")} placeholder="Phone Number" />

                                        <input className="form-input" required {...register("address")} placeholder="Address" />

                                        <div className="quantity">

                                            <span onClick={minusClickHandler} className="minus" ><BsFillBagDashFill /></span>
                                            <span>Quantity : <span className="color-p">{quantity}</span></span>
                                            <span onClick={plusClickHandler} className="plus"><BsFillBagPlusFill /></span>
                                        </div>

                                        <textarea className="form-input msg-box" {...register("massage")} placeholder="Massage" />

                                        <input className="submit-btn" type="submit" />
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </>
    );
};

export default BuyNow;