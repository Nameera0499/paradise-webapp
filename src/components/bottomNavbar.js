import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Paper } from '@mui/material';
export default function BottomNavbar() {
    const [value, setValue] = React.useState(0);
    return (
        <Box >
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        "& .Mui-selected, .Mui-selected > svg": {
                            color: "#922f34",
                        },

                    }}
                >
                    <BottomNavigationAction sx={{ fontSize: "24px" }} label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Offers" icon={<LocalOfferIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PermIdentityIcon />} />

                </BottomNavigation>
            </Paper>
        </Box>
    );
}