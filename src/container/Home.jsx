import { Box, Stack } from '@mui/material';
import React, { Component } from 'react'
import CuponsAndOffers from '../components/cuponsAndOffers';
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

        return (
            <>
                <Box sx={{ flex: 1 }}>
                    <Stack>
                        <NavBar />
                    </Stack>
                    <Stack sx={{ m: 5 }}>
                        <Recommendation />
                    </Stack>
                    <Stack sx={{ m: 5 }}>
                        <Offer />
                    </Stack>
                    <Stack sx={{ m: 5 }}>
                        <CuponsAndOffers />
                    </Stack>
                </Box>
            </>
        )
    }
}

export default (HomeContainer);
