import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import WatchCard from '../../WatchCollection/WatchCard/WatchCard';

const ManageProducts = () => {
    const { products, setProducts } = useAuth();

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
            <Container id="smallCollection" style={{ paddingTop: '1rem' }}>
                <div className="tag-line">
                    <h3 className="left-right">Manage All Products</h3>
                </div>
                <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                    {
                        products.map((pd) => <WatchCard product={pd} manage watch={pd} key={pd.title} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default ManageProducts;