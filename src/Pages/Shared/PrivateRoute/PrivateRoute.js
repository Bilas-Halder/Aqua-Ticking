import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import BlueSpinner from '../Spinner/Spinner';

const PrivateRoute = (props) => {
    const { user, loading } = useAuth();
    const { children, ...rest } = props;
    // here "...rest" means every key value pair of props without children

    if (loading) {
        // in the time of loading it will show a spinner
        return (
            <BlueSpinner height="80vh"></BlueSpinner>
        );
    }

    return (
        // here ...rest is just spread operator
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}

        ></Route>
    );
};

export default PrivateRoute;