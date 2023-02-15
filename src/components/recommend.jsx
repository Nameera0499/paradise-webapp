import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import Recommend from './card';
import CustomScrollbar from './srollable';

export default function Recommendation() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
    }
    React.useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])
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
        },
        {
            id: 4,
            label: "Desserts",
            src: "/images/Dessert.jpg"
        },
        {
            id: 5,
            label: "Beverages",
            src: "/images/Beverage.jpg"
        },
        {
            id: 6,
            label: "Accompaniments",
            src: "/images/accompaniments.jpg"
        }
    ]
    return (
        <Box sx={{ mt: 5 }}>
            <Stack direction="row" sx={{ p: { xs: 2, sm: 5 } }}>
                <Typography sx={{
                    fontSize: { xs: "16px", sm: "24px" },
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
                                        height="150px"
                                        width="150px"
                                        style={
                                            { borderRadius: "50%", marginRight: "50px" }
                                        } />
                                </>
                            )
                        })
                    }
                    {windowWidth > 900 ? <img src='/images/rightIcon.png' height={"30px"} /> : null}

                </Stack>
            </CustomScrollbar>

        </Box>
    );
}