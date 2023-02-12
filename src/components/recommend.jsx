import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import Recommend from './card';
import CustomScrollbar from './srollable';

export default function Recommendation() {
    const exploreMenu = [
        {
            id: 1,
            label: "Try New",
            src: "/images/tryNew.png"
        },
        {
            id: 2,
            label: "Combo",
            src: "/images/combo.jpg"
        },
        {
            id: 3,
            label: "Biryani",
            src: "/images/Biryani.jpg"
        }, {
            id: 4,
            label: "Kebabs",
            src: "/images/Kebab.jpg"
        }, {
            id: 5,
            label: "Retail Products",
            src: "/images/retail.jpeg"
        }, {
            id: 6,
            label: "Desserts",
            src: "/images/Dessert.jpg"
        }, {
            id: 7,
            label: "Beverages",
            src: "/images/Beverage.jpg"
        }, {
            id: 8,
            label: "Accompaniments",
            src: "/images/accompaniments.jpg"
        }, {
            id: 9,
            label: "Haleem",
            src: "/images/Haleem.jpg"
        },
    ]
    return (
        <Box sx={{ mt: 5 }}>
            <Stack direction="row" sx={{ p: 5 }}>
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: 900
                }}>Explore Menu</Typography>
            </Stack>
            <CustomScrollbar>
                <Stack direction="row" sx={{ p: 5, alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>

                    {
                        exploreMenu.map((i) => {
                            return (
                                <>
                                    <Recommend
                                        key={i.id}
                                        src={i.src}
                                        label={i.label}
                                        height="200px"
                                        width="200px"
                                        style={
                                            { borderRadius: "50%", marginRight: "50px" }
                                        } />
                                </>
                            )
                        })
                    }
                </Stack>
            </CustomScrollbar>

        </Box>
    );
}