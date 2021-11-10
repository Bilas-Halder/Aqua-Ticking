import React from 'react';
import './Banner.css';
import { Col, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../images/banner-img.jpg';
import bannerWatch from '../../../images/banner-watch.png';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Banner = () => {
    const ref = useRef(null);
    const [divHeight, setDivHeight] = useState(0);
    const [divWidth, setDivWidth] = useState(0);

    useEffect(() => {
        setDivWidth(ref.current ? (ref.current.offsetWidth - 335) / 2 : 0);
        setDivHeight(ref.current ? (ref.current.offsetHeight - 462) / 2 : 0);
        console.log(divHeight, divWidth);
    }, [ref.current, window.innerWidth]);

    return (
        <Container fluid style={{ padding: '0px' }}>
            <Row style={{ margin: '0px', width: '100%', position: 'relative' }} ref={ref}>
                <Col id="banner-left" xs={12} md={6} style={{ padding: '0px' }}>
                    <img style={{
                        width: "100%"
                    }} src={bannerImg} alt="" />
                </Col>
                <Col xs={12} md={6} style={{ padding: '0px' }}>

                    <div className="sm-img-div">
                        <div className="watch-img-sm">
                            <img style={{
                                width: "100%"
                            }} src={bannerWatch} alt="" />
                        </div>
                    </div>

                    <div className="banner-right">
                        <div>
                            <h1 className="banner-quote">
                                Small <br />
                                <span className="pleasure-from"> Pleasure </span>
                                <br />Aqua Ticking
                            </h1>

                            <p className="banner-text">
                                We transparently build high-quality minimal watches from the finest components and materials.
                            </p>
                        </div>
                    </div>
                </Col>


                <div className="watch-img"
                    style={{
                        marginTop: divHeight,
                        marginLeft: divWidth
                    }}
                >
                    <img style={{
                        width: "100%"
                    }} src={bannerWatch} alt="" />
                </div>
            </Row>
        </Container>
    );
};

export default Banner;