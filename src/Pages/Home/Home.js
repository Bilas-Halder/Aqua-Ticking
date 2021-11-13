import React, { useState, useEffect } from 'react';
import Banner from './Banner/Banner';
import LawsonCollection from './LawsonCollection/LawsonCollection';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Header from '../Shared/Header/Header';
import useAuth from '../../hooks/useAuth';

const Home = () => {


    const { dbURL, reviews, setReviews } = useAuth();
    useEffect(() => {
        fetch(`${dbURL}/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <>

            <Header />
            <Banner></Banner>
            <Products></Products>
            <LawsonCollection />
            <Reviews reviews={reviews} ></Reviews>
        </>
    );
};

export default Home;