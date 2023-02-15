import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function BasicSelect({ sx }) {
    const [location, setLocation] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
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
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center",ml:4 }}>
            {windowWidth > 500 ? <LocationOnIcon /> : "Delivery Location"}
            <FormControl variant="standard" sx={{ m: 1, minWidth: { xs: 100, sm: 220 } }}>
                <Select
                    name={"location"}
                    value={location}
                    onChange={handleChange}
                    label="location"
                    sx={sx}
                >

                    <MenuItem value={"mumbra"}>Mumbra,Thane</MenuItem>
                    <MenuItem value={"kalwa"}>Kalwa,Thane</MenuItem>
                    <MenuItem value={"thane"}>Thane</MenuItem>
                    <MenuItem value={"mulund"}>Mulund,Mumbai</MenuItem>
                    <MenuItem value={"nahur"}>Nahur,Mumbai</MenuItem>
                    <MenuItem value={"bhandup"}>Bhandup,Mumbai</MenuItem>
                    <MenuItem value={"kharghar"}>Kharghar,Navi-Mumbai</MenuItem>
                    <MenuItem value={"airoli"}>Airoli,Navi-Mumbai</MenuItem>
                    <MenuItem value={"panvel"}>Panvel,Navi-Mumbai</MenuItem>
                </Select>
            </FormControl>

        </Box>
    );
}