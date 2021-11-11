import React from 'react';
import { Container, Row } from 'react-bootstrap';
import WatchCard from '../../WatchCollection/WatchCard/WatchCard';

const Products = () => {
    const pd = {
        title: "Lawson Franklin 38 Men’s Watch",
        img: "https://i.ibb.co/TBTFsPt/1.png",
        price: 210.5258,
        percentOff: 13,
        rating: 3.3,
        reviews: 5,
        allLink: `
        https://i.ibb.co/0QmMNvD/2.png
        https://i.ibb.co/QHG3kp0/3.png
        https://i.ibb.co/rM11cDX/4.png
        https://i.ibb.co/4Vxn0z1/5.png
        https://i.ibb.co/ZT2brYj/6.png
        https://i.ibb.co/sJ5mnq9/7.png
        https://i.ibb.co/khQbCTc/8.png
        `
    }
    const x = [0, 1, 2, 3, 4, 5];

    return (
        <Container style={{ marginTop: '7rem' }}>
            <h2 className="banner-quote" style={{ fontSize: '2.4rem', textAlign: "center", marginBottom: "2rem" }}>
                Our Bestsellers
            </h2>
            <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                {
                    x.map(() => <WatchCard watch={pd} key={pd.title} />)
                }
            </Row>
        </Container>
    );
};

export default Products;