import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
export default function BottomNavbar() {
    const [value, setValue] = React.useState(0);
    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    "& .Mui-selected, .Mui-selected > svg": {
                        color: "#922f34"
                    }
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Offers" icon={<LocalOfferIcon />} />
                <BottomNavigationAction label="Profile" icon={<PermIdentityIcon />} />

            </BottomNavigation>
        </Box>
    );
}