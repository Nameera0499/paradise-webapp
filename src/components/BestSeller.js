import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import CustomScrollbar from './srollable';
import BestSellerCard from './bestSellerCard';
import gsap from "gsap";
export default function BestSeller() {

    const bestSeller = [
        {
            id: 1,
            title: "Supreme Chicken Biryani Pack",
            src: "/images/Supreme_Chicken.jpg",
            description: "Freshly prepared Kachhi Dum Biryani",
            price: "1500",
        },
        {
            id: 2,
            title: "Special Chicken Biryani",
            src: "/images/SpecialChickenBiryani.jpg",
            description: "Freshly prepared Special Chicken Biryani",
            price: "1200",
        },
        {
            id: 3,
            title: "Nizami Chicken Biryani",
            src: "/images/NizamiChickenBiryani.jpg",
            description: "Freshly prepared Nizami Chicken Biryani",
            price: "1350.50",
        },
        {
            id: 4,
            title: "Mutton Biryani Pack",
            src: "/images/muttonBiryani.jpg",
            description: "Freshly prepared Mutton Biryani",
            price: "2000",
        },
        {
            id: 5,
            title: "Special Mutton Biryani",
            src: "/images/SpecialMuttonBiryani.jpg",
            description: "Freshly prepared Special Mutton Biryani",
            price: "2500",
        },
        {
            id: 6,
            title: "Nizami Mutton Biryani",
            src: "/images/nizamiMuttonBiryani.jpeg",
            description: "Freshly prepared Nizami Mutton Biryani",
            price: "2650",
        }
    ]

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

    let scrl = React.useRef(null);
    const [scrollX, setscrollX] = React.useState(0);
    const [scrolEnd, setscrolEnd] = React.useState(false);

    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };
    return (
        <Box sx={{ mt: 5 }}>
            <Stack direction="row" >
                <Typography sx={{
                    fontSize: "24px",
                    fontWeight: 900
                }}>Best Seller</Typography>
            </Stack>
            {
                windowWidth > 500 && scrollX !== 0 && (
                    <div style={{
                        position: "absolute",
                        marginTop: "120px",
                        background: "#fff",
                    }}
                    >

                        <img src="/images/leftIcon.png" onClick={() => slide(-50)}
                            onMouseEnter={(e) => anim(e)}
                            onMouseLeave={(e) => anim2(e)} />
                    </div>
                )
            }

            <CustomScrollbar>
                <Stack ref={scrl} onScroll={scrollCheck} direction="row" sx={{ alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>

                    {
                        bestSeller.map((i) => {
                            return (
                                <BestSellerCard
                                    key={i.id}
                                    src={i.src}
                                    title={i.title}
                                    description={i.description}
                                    price={i.price}
                                />
                            )
                        })
                    }
                    {windowWidth > 500 && !scrolEnd && (
                        <div style={{
                            position: "absolute",
                            marginLeft: "1600px",
                            background: "#fff",
                        }}
                        >

                            <img src="/images/rightIcon.png" onClick={() => slide(+50)}
                                onMouseEnter={(e) => anim(e)}
                                onMouseLeave={(e) => anim2(e)} />
                        </div>
                    )}


                </Stack>
            </CustomScrollbar>

        </Box >
    );
}