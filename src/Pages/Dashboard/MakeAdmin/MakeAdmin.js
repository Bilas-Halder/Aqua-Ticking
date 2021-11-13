import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    const { dbURL } = useAuth();

    useEffect(() => {
        fetch(`${dbURL}/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(e => console.log(e))
    }, [reload]);

    const handleMakeAdmin = (user) => {
        console.log(user);
        fetch(`${dbURL}/makeAdmin/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then(response => response.json())
            .then(() => {
                window.alert(`${user.displayName} is an admin from now on.`);
                setReload(!reload);
            })
            .catch(err => console.log(err));
    }


    return (
        <Container>
            <div className="my-order">
                <div className="tag-line">
                    <h3 className="left-right">Make New Admin</h3>
                </div>
                <Row className="users-row" style={{ width: '100%', position: 'relative' }}>
                    {
                        users.map((user) => {
                            const { displayName, email, role } = user;
                            return (
                                <Col xs={12} md={12} lg={12} className="custom-col px-0">
                                    <div className="d-flex  user-details">
                                        <div className="user-name user-item">{displayName}</div>
                                        <div className="d-flex user-mid">
                                            <div className="user-email user-item">{email}</div>
                                            <div className="user-role user-item">{role.toUpperCase()}</div>
                                        </div>
                                        <button disabled={user.role === "admin" ? true : false} onClick={() => handleMakeAdmin(user)} className={`primary-btn make-admin-btn  user-item ${user.role === "admin" ? "disabled" : ""}`}>Make Admin</button>

                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>

            </div>
        </Container>
    );
};

export default MakeAdmin;