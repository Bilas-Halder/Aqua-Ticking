import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import MyOrder from './MyOrders/MyOrders';
import './Navigation/Navigation.css';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import DashboardHome from './DashboardHome/DashboardHome';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (

        <div className="dashboard" style={{
            minHeight: "95vh", width: "100%", marginTop: "-70px", marginBottom: "-6rem"
        }}>
            <div className="left-side left-side-collapse" style={{ backgroundColor: "#051E34" }}>
                <Navigation url={url} />
            </div>
            {
                console.log(path, url, `${path}/myorder`)
            }

            <div className="right-side">
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrder />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;