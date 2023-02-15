import { Stack } from "@mui/material";
import React, { useState } from "react";
import BestSeller from "./components/BestSeller";
import BottomNavbar from "./components/bottomNavbar";
import CuponsAndOffers from "./components/cuponsAndOffers";
import Delivery from "./components/Delivery";
import NavBar from "./components/navbar";
import Offer from "./components/offers";
import BasicPopover from "./components/popOver";
import Recommendation from "./components/recommend";
import './App.css'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  blur: {
    filter: "blur(5px)",

  },

})

function App() {
  const classes = useStyles()
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <NavBar handleClick={handleClick} />

      {anchorEl ? <BasicPopover anchorEl={anchorEl} onClose={handleClose} /> : null}

      <div id="parent" >
        <div className={anchorEl ? classes.blur : null}>
          <div style={{ padding: "24px", }}>
            <Recommendation />
          </div>
          <div style={{ padding: "24px" }}>
            {
              windowWidth > 500 ?
                <Offer />
                : <>

                  <CuponsAndOffers explore={exploreOffers} title="Blockbuster Everyday Offers" />
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
          </div>
          <div style={{ padding: "24px" }}>
            <CuponsAndOffers explore={exploreCupons} title="Exclusive Offers & Coupons" />
          </div>
          <div style={{ padding: "24px" }}>
            <BestSeller />
          </div>
          <div style={{ padding: "24px" }}>
            {
              windowWidth < 500 ?
                <BottomNavbar />
                : null
            }
          </div>
        </div>

      </div>
      {/* <Home id={"body"} /> */}

    </>



  );
}

export default App;
