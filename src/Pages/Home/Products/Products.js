import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import WatchCard from '../../WatchCollection/WatchCard/WatchCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://glacial-cliffs-26298.herokuapp.com/watches")
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <Container id="smallCollection" style={{ paddingTop: '6rem' }}>
            <h2 className="banner-quote" style={{ fontSize: '2.4rem', textAlign: "center", marginBottom: "2rem" }}>
                Our Bestsellers
            </h2>
            <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                {
                    products.map((pd) => <WatchCard watch={pd} key={pd.title} />)
                }
            </Row>
        </Container>
    );
};

export default Products;