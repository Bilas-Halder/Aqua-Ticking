import React from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import BlueSpinner from '../../Shared/Spinner/Spinner';
import WatchCard from '../../WatchCollection/WatchCard/WatchCard';
import './MyOrder.css';


const MyOrders = () => {
    const { dbURL, user, orders, setOrders } = useAuth();

    useEffect(() => {
        fetch(`${dbURL}/getOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(e => console.log(e))
    }, []);
    return (

        orders.length === 0 ? <BlueSpinner></BlueSpinner> :
            <Container>
                <div className="my-order">
                    <div className="tag-line">
                        <h3 className="left-right">My Orders</h3>
                    </div>
                    <Row style={{ margin: '0px', width: '100%', position: 'relative' }}>
                        {
                            orders.map((order) => <WatchCard order={order} watch={order.watch} key={order._id} />)
                        }
                    </Row>

                </div>
            </Container>
    );
};

export default MyOrders;