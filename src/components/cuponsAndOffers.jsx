import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import Recommend from './card';
import CustomScrollbar from './srollable';

export default function CuponsAndOffers() {
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
    return (
        <Box sx={{ mt: 5 }}>
            <Stack direction="row">
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: 900
                }}>Exclusive Offers & Coupons</Typography>
            </Stack>
            <CustomScrollbar>
                <Stack direction="row" sx={{ p: 5, alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>

                    {
                        exploreCupons.map((i) => {
                            return (
                                <>
                                    <Recommend
                                        key={i.id}
                                        src={i.src}
                                        label={i.label}
                                        height="200px"
                                        width="500px"
                                        style={{
                                            borderRadius: "10px", marginRight: "30px"
                                        }} />
                                </>
                            )
                        })
                    }
                </Stack>
            </CustomScrollbar>

        </Box>
    );
}