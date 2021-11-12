import React from 'react';
import Banner from './Banner/Banner';
import LawsonCollection from './LawsonCollection/LawsonCollection';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <>

            <Header />
            <Banner></Banner>
            <Products></Products>
            <LawsonCollection />
            <Reviews></Reviews>
        </>
    );
};

export default Home;