import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasicSelect from './select';
import { Stack } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar >
                <Toolbar sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#922f34"
                }}>
                    <Stack direction={"row"} sx={{ alignItems: "center" }}>
                        <Stack sx={{ px: 5 }}>
                            <img src="/images/logo.jpg" alt="logo" height="70px" />
                        </Stack>
                        <Stack>
                            <BasicSelect />
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "300px"
                    }}>
                        <Button color="inherit">Menu</Button>

                        <Button color="inherit">Login</Button>
                        <ShoppingCartTwoToneIcon />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}