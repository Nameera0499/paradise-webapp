import * as React from 'react';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import Recommend from './card';
import CustomScrollbar from './srollable';

export default function CuponsAndOffers({ explore, title }) {

    return (
        <Box sx={{ mt: 5 }}>
            <Stack direction="row">
                <Typography sx={{
                    fontSize: { xs: "16px", sm: "24px" },
                    fontWeight: 900
                }}>{title}</Typography>
            </Stack>
            <CustomScrollbar>
                <Stack direction="row" sx={{ p: 5, alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>

                    {
                        explore.map((i) => {
                            return (
                                <>
                                    <Recommend
                                        key={i.id}
                                        src={i.src}
                                        label={i.label}
                                        height="200px"
                                        width="470px"
                                        style={{
                                            borderRadius: "10px", marginRight: "30px"
                                        }} />
                                </>
                            )
                        })
                    }
                </Stack>
            </CustomScrollbar>

        </Box>
    );
}