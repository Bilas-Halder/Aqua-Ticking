import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import WatchCard from './WatchCard/WatchCard';
import Header from '../Shared/Header/Header';

const WatchCollection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://glacial-cliffs-26298.herokuapp.com/watches")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <>
            <Header />
            <Container id="smallCollection" style={{ paddingTop: '1rem' }}>
                <h2 className="banner-quote" style={{ fontSize: '2.4rem', textAlign: "center", marginBottom: "2rem" }}>
                    Our Bestsellers
                </h2>
                <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                    {
                        products.map((pd) => <WatchCard watch={pd} key={pd.title} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default WatchCollection;