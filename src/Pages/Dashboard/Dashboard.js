import React, { useEffect } from 'react';
import { Switch, useRouteMatch } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import MyOrder from './MyOrders/MyOrders';
import './Navigation/Navigation.css';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import DashboardHome from './DashboardHome/DashboardHome';
import useAuth from '../../hooks/useAuth';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../Shared/AdminRoute/AdminRoute';
import PrivateRoute from '../Shared/PrivateRoute/PrivateRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { setRole, user, dbURL } = useAuth();
    useEffect(() => {
        fetch(`${dbURL}/users/role/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role);
            })
    }, []);

    return (

        <div className="dashboard" style={{
            minHeight: "95vh", width: "100%", marginTop: "-70px", marginBottom: "-6rem"
        }}>
            <div className="left-side left-side-collapse" style={{ backgroundColor: "#051E34" }}>
                <Navigation url={url} />
            </div>

            <div className="right-side">
                <Switch>
                    <PrivateRoute exact path={path}>
                        <DashboardHome></DashboardHome>
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/myOrders`}>
                        <MyOrder />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/pay`}>
                        <Pay />
                    </PrivateRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addAProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>


                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;