import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Offer({ src }) {
    return (
        <>
            <div>
                <span style={{ fontSize: "24px", fontWeight: 900 }}>Blockbuster Everyday Offers</span>
            </div>
            <div style={{marginTop:"30px"}}>
                <Carousel>
                    <Carousel.Item interval={1350}>
                        <img
                            height={"250px"}
                            className="d-block w-100"
                            src="/images/offer1.jpg"
                            alt="Image One"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1350}>
                        <img
                            height={"250px"}
                            className="d-block w-100"
                            src="/images/offer2.jpg"
                            alt="Image Two"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1350}>
                        <img
                            height={"250px"}
                            className="d-block w-100"
                            src="/images/offer3.jpg"
                            alt="Image Three"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1350}>
                        <img
                            height={"250px"}
                            className="d-block w-100"
                            src="/images/offer4.jpg"
                            alt="Image Four"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Offer;