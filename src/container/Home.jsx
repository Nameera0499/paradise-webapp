import { Box, Stack, Typography } from '@mui/material';
import React, { Component } from 'react'
import BestSeller from '../components/BestSeller';
import BottomNavbar from '../components/bottomNavbar';
import CuponsAndOffers from '../components/cuponsAndOffers';
import CustomNavbar from '../components/customNavBar';
import Delivery from '../components/Delivery';
import NavBar from '../components/navbar';
import Offer from '../components/offers';
import Recommendation from '../components/recommend';

class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const windowWidth = window.innerWidth;
        const exploreCupons = [
            {
                id: 1,
                label: "",
                src: "/images/cupon1.png"
            },
            {
                id: 2,
                label: "",
                src: "/images/cupon2.png"
            },
            {
                id: 3,
                label: "",
                src: "/images/cupon3.png"
            },
            {
                id: 4,
                label: "",
                src: "/images/cupon4.jpg"
            }
        ]
        const exploreOffers = [
            {
                id: 1,
                label: "",
                src: "/images/offer1.jpg"
            },
            {
                id: 2,
                label: "",
                src: "/images/offer2.jpg"
            },
            {
                id: 3,
                label: "",
                src: "/images/offer3.jpg"
            },
            {
                id: 4,
                label: "",
                src: "/images/offer4.jpg"
            }
        ]
        return (
            <>
                <Box sx={{ flex: 1 }} >
                  
                    <Stack sx={{ xs: { m: 1 }, sm: { m: 5 } }}>
                        <Recommendation />
                    </Stack>
                    {
                        windowWidth > 500 ?
                            <Stack sx={{ m: 5 }}>
                                <Offer />
                            </Stack> : <>
                                <Stack sx={{ m: 5 }}>
                                    <CuponsAndOffers explore={exploreOffers} title="Blockbuster Everyday Offers" />
                                </Stack>
                                <Stack sx={{ m: 2, borderRadius: "5px" }}>
                                    <Delivery
                                        sx={{
                                            height: "100px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between"
                                        }}
                                        src="/images/delivery2.png"
                                        text={"Get Food Delivered within"}
                                        description="30-35 min"
                                        textsx={{ fontSize: "16px", }}
                                        descriptionsx={{ fontSize: "20px", fontWeight: 900 }} /> </Stack>

                                <Stack sx={{ m: 2, borderRadius: "5px", border: "2px solid #922f34" }}>
                                    <Delivery
                                        sx={{
                                            height: "150px",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            background: "#fff2f2"
                                        }}
                                        src="/images/delivery1.png"
                                        text={"Opt for Zero Contact Delivery"}
                                        textsx={{ fontSize: "18px", fontWeight: 900 }}
                                        descriptionsx={{ fontSize: "12px", color: "#666" }}
                                        description="Our delivery partner will leave the order at your door/gate." /> </Stack>
                            </>
                    }

                    <Stack sx={{ m: 5 }}>
                        <CuponsAndOffers explore={exploreCupons} title="Exclusive Offers & Coupons" />
                    </Stack>
                    <Stack sx={{ m: 5 }}>
                        <BestSeller />
                    </Stack>
                    {
                        windowWidth < 500 ? <Stack sx={{ m: 5 }}>
                            <BottomNavbar />
                        </Stack> : null
                    }

                </Box>
            </>
        )
    }
}

export default (HomeContainer);
