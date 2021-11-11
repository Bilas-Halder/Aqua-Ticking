import React from 'react';
import { Card, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './LawsonCollection.css';

const LawsonCollection = () => {
    return (
        <Container className="mt-3 mt-md-5">
            <Card className="bg-dark text-white">
                <Card.Img src="https://i.ibb.co/Nxhtvhy/extra-img.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <div className="lawson-details">
                        <div className="lawson-title">
                            The Lawson <br /> Collection
                        </div>
                        <p className="lawson-text">
                            Whether you’re about to invest in your first serious watch or looking to add to an already impressive collection, the right luxury watch acts as a milestone in life: a marker of time well spent. If you’re struggling to choose the perfect timepiece then allow us to help. Here are the classics we suggest investing in.
                        </p>
                        <Nav.Link className="secondary-btn lawson-btn" as={HashLink} to="/#smallCollection" >Shop Collection</Nav.Link>
                    </div>


                </Card.ImgOverlay>
            </Card>
        </Container>
    );
};

export default LawsonCollection;