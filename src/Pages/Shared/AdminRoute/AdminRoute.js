import React from 'react';
import { useEffect } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import BlueSpinner from '../Spinner/Spinner';

const AdminRoute = (props) => {
    const { role, setRole, user, dbURL, loading, setLoading } = useAuth();
    const { children, ...rest } = props;

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
            render={({ location }) => user.email && role === "admin" ? children :
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                ></Redirect>}

        ></Route>
    );
};

export default AdminRoute;