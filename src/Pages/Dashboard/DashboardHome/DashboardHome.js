import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
            <div className="tag-line small-tag">
                <div className="d-flex flex-colum">
                    <h3 className="left-right mb-3">Welcome To DashBoard</h3>
                    <h3 style={{ fontSize: "2.5rem" }} className="mb-5">{user.displayName}</h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;