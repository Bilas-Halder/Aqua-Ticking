import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import { Container } from "react-bootstrap";
import Review from "./Review/Review";
import BlueSpinner from "../../Shared/Spinner/Spinner";

SwiperCore.use([EffectCoverflow, Pagination]);

const Reviews = ({ reviews }) => {
    return (
        reviews.length === 0 ? <BlueSpinner></BlueSpinner> :
            <Container>

                <h2 className="banner-quote" style={{ fontSize: '2.4rem', textAlign: "center", marginBottom: "3rem", marginTop: "3rem" }}>
                    Reviews
                </h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,        // Slide rotate in degrees
                        "stretch": -50,      // Stretch space between slides (in px)
                        "depth": 100,     // Depth offset in px (slides translate in Z 
                        "modifier": 1,       // Effect multiplier
                        "slideShadows": false // Enables slides shadows
                    }}
                    loop={true}
                    pagination={true}
                    className="mySwiper">
                    {
                        reviews.map((review) => {
                            return (
                                <SwiperSlide className="slider-custom" >
                                    <Review review={review} />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>

            </Container>
    );
};

export default Reviews;