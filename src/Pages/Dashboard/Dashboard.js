import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navigation from './Navigation/Navigation';
import './Navigation/Navigation.css';

const Dashboard = () => {
    return (

        <div className="dashboard" style={{
            minHeight: "95vh", width: "100%", marginTop: "-70px", marginBottom: "-6rem"
        }}>
            <div className="left-side left-side-collapse" style={{ backgroundColor: "#051E34" }}>
                <Navigation />
            </div>


            <div className="right-side">
                right side lorem1000
            </div>
        </div>
    );
};

export default Dashboard;