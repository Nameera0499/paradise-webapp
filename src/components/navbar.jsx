import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasicSelect from './select';
import { Badge, Stack } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import BasicPopover from './popOver';
export default function NavBar({ id }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
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

    return (
        <Box >
            <AppBar position="fixed" sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "#922f34",
                flexDirection: { xs: "column", sm: "row" }
            }} >
                <Toolbar >
                    <Stack direction={{ xs: "column", sm: "row" }} sx={{ alignItems: "center !important" }}>
                        <Stack sx={{ px: 5 }}>
                            <img src="/images/logo.jpg" alt="logo" height="70px" />
                        </Stack>
                        <Stack
                            direction={{ xs: "row" }}
                            justifyContent={{ xs: "space-between" }}
                            alignItems={{ xs: "center" }}
                            width={{ xs: "380px", sm: "1100px" }}
                        >
                            <Stack>
                                <BasicSelect sx={{ color: "white", minWidth: { xs: 100, sm: 220 } }} />
                            </Stack>
                            {
                                windowWidth < 500 ? (<>
                                    <Stack direction={{ xs: "row" }} sx={{

                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "160px !important"

                                    }}  >
                                        <Button sx={{ border: "1px solid #fff" }} color="inherit">Login</Button>
                                        <Button sx={{ border: "1px solid #fff" }} color="inherit">Change</Button>
                                    </Stack>

                                </>) : null
                            }

                        </Stack>


                    </Stack>
                    {
                        windowWidth > 500 ? <Stack direction={"row"} sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "300px"
                        }}>
                            <Button color="inherit" onClick={handleClick} >Menu</Button>


                            <Button color="inherit">Login</Button>
                            <Badge badgeContent={5} color="error">
                                <ShoppingCartTwoToneIcon />
                            </Badge>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Stack> : null
                    }

                </Toolbar>
            </AppBar>
            {anchorEl ? <BasicPopover anchorEl={anchorEl} onClose={handleClose} /> : null}
        </Box >
    );
}