import React from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import BlueSpinner from '../../Shared/Spinner/Spinner';
import WatchCard from '../../WatchCollection/WatchCard/WatchCard';
import '../MyOrders/MyOrder.css';


const ManageOrders = () => {
    const { dbURL, user, orders, setOrders, loading, setLoading, useAdminRole } = useAuth();
    useEffect(() => {
        console.log(loading);
    }, [loading]);
    useAdminRole();

    useEffect(() => {
        fetch(`${dbURL}/getOrders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <Container>
            <div className="my-order">
                <div className="tag-line">
                    <h3 className="left-right">Manage All Orders</h3>
                </div>
                <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                    {
                        orders.map((order) => <WatchCard order={order} all watch={order.watch} key={order._id} />)
                    }
                </Row>

            </div>
        </Container>
    );
};

export default ManageOrders;