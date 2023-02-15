import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    stack: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",

    },
    button: {
        boxShadow: "-5px 5px 20px 0 rgb(99 7 8 / 32%)",
        width: "80px",
        border: "1px solid #891a1c !important",
        color: "#891a1c !important",
        '&:hover': {
            border: '1px solid #891a1c !important',
        },
    },
    priceDiv: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "60px"
    },
    price: {
        fontSize: "18px",
        fontWeight: 900
    },
    title: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "24px",
    },
    img: {
        padding: "20px"
    },
    description: {
        fontSize: "14px",
        fontWeight: 400,
        color: "#666"
    }
})
export default function BestSellerCard({ src, title, description, price }) {
    const classes = useStyles()
    return (
        <>

            <Stack direction={"row"} sx={{
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#fff",
                margin: "30px 10px",
                boxShadow: "1px 1px 12px 0 rgb(0 0 0 / 8%)",
            }}>
                <div className={classes.img}>
                    <img style={{ borderRadius: "10px" }} src={src} height="150px" width="150px" />
                </div>
                <div style={{ width: "350px" }}>
                    <div className={classes.title}>
                        <div style={{ width: "80%" }}>
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: 900 }}>
                                {title}
                            </Typography>
                        </div>
                        <div>
                            <img src={"/images/favorite.png"} height="35px" />
                        </div>
                    </div>
                    <div>
                        <Typography component="div" className={classes.description}>
                            {description}
                        </Typography>
                    </div>
                    <div className={classes.priceDiv}>
                        <div>
                            <Typography component="div" className={classes.price} >
                                ₹{price}
                            </Typography>
                        </div>
                        <div>
                            <Button variant="outlined" className={classes.button}>ADD</Button>
                        </div>
                    </div>
                </div>
            </Stack>


        </>
    );
}