import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function BasicSelect() {
    const [location, setLocation] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <LocationOnIcon />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                <Select
                    name={"location"}
                    value={location}
                    onChange={handleChange}
                    label="location"
                    sx={{ color: "white" }}
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