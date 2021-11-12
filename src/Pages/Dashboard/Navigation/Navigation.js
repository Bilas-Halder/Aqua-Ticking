import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo-1.png';
import { MdDashboard, MdPayment, MdRateReview } from 'react-icons/md';
import { FaClipboardList, FaHome } from 'react-icons/fa';
import { BsFillCollectionFill } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { IoLogOut, IoSettings, IoMdMenu } from 'react-icons/io5';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const [navData, setNavData] = useState([]);
    const [menuBtn, setMenuBtn] = useState(false);
    const [clicked, setClicked] = useState(false);

    const location = useLocation();
    const history = useHistory();

    const handleLogOut = () => {
        setClicked(true);
        logOut(location.pathname + location.hash, history);
    }

    const userNavData = [
        {
            name: "Dashboard",
            icon: <MdDashboard />,
            to: "/"
        },
        {
            name: "My Order",
            icon: <FaClipboardList />,
            to: "/"
        },
        {
            name: "Review",
            icon: <MdRateReview />,
            to: "/"
        },
        {
            name: "Pay",
            icon: <MdPayment />,
            to: "/"
        }
    ];
    const adminNavData = [
        {
            name: "Dashboard",
            icon: <MdDashboard />,
            to: "/"
        },
        {
            name: "My Order",
            icon: <FaClipboardList />,
            to: "/"
        },
        {
            name: "Review",
            icon: <MdRateReview />,
            to: "/"
        },
        {
            name: "Pay",
            icon: <MdPayment />,
            to: "/"
        }
    ];


    const fixedNavData = [
        {
            name: "Home",
            icon: <FaHome />,
            to: "/"
        },
        {
            name: "Collections",
            icon: <BsFillCollectionFill />,
            to: "/watch-collection"
        },
        {
            name: "Setting",
            icon: <IoSettings />,
            to: "/"
        }
    ];

    useEffect(() => setNavData(userNavData), []);

    // toggle behavior
    useEffect(() => {
        setClicked(!menuBtn);

        const element = document.querySelector(".left-side");
        if (menuBtn) {
            element.classList.remove("left-side-collapse");
            document.querySelector(".hamburger-btn").classList.add("menu-btns");
        }
    }, [menuBtn]);

    useEffect(() => {
        const element = document.querySelector(".left-side");
        if (clicked) {
            element.classList.add("left-side-collapse");
            document.querySelector(".hamburger-btn").classList.remove("menu-btns");
            console.log(element);
            setClicked(false);
        }
    }, [clicked]);

    return (
        <>
            <div className="brand-name nav-brand-name">
                <div className="collapse-btn-div">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="logo-div">
                            <img src={logo} alt="" />
                        </div>
                        <h4 className="brand-name" style={{ color: "white" }}> Aqua Ticking</h4>
                    </div>
                    <div onClick={() => setMenuBtn(!menuBtn)} className="hamburger-btn">
                        <div className="menu-btn" ></div>
                        <div className="menu-btn1" ></div>
                        <div className="menu-btn2" ></div>
                    </div>
                </div>
            </div>
            <nav className="custom-nav-bar">
                <ul className="custom-nav-top">
                    {
                        navData.map((data, i) => {
                            return (
                                <li key={i} onClick={() => setClicked(true)} className="custom-nav-links">
                                    <NavLink to={data.to}>{data.icon} {data.name}</NavLink>
                                </li>
                            );
                        })
                    }
                </ul>

                <ul className="custom-nav-bottom">
                    {
                        fixedNavData.map((data, i) => {
                            return (
                                <li onClick={() => setClicked(true)} key={i} className="custom-nav-links">
                                    <NavLink to={data.to}>{data.icon} {data.name}</NavLink>
                                </li>
                            );
                        })
                    }

                    <li className="custom-nav-links">
                        <a href="/" onClick={handleLogOut}><IoLogOut /> Log Out</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;