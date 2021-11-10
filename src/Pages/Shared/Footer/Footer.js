import React from 'react';

const Footer = () => {
    const style = {
        backgroundColor: "#0E1133",
        color: "gray",
        textAlign: "center",
        width: '100%',
        height: "80px",
        marginTop: "6rem",
    }
    return (
        <div style={style} className="footer-section d-flex align-items-center justify-content-center">
            <p >© Copyright 2021 | Bilas Halder</p>
        </div>


    );
};

export default Footer;