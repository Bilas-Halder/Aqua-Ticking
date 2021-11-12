import React from 'react';
import { Spinner } from 'react-bootstrap';

const BlueSpinner = ({ height }) => {
    return (
        <div>
            <div style={{ minHeight: height || "50vh" }} className="d-flex justify-content-center align-items-center w-100">
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default BlueSpinner;