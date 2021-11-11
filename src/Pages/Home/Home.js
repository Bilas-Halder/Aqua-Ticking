import React from 'react';
import Banner from './Banner/Banner';
import LawsonCollection from './LawsonCollection/LawsonCollection';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <LawsonCollection />
            <Reviews></Reviews>
        </>
    );
};

export default Home;