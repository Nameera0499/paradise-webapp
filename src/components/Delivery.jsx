import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

export default function Delivery({ src, text, description, textsx, sx,descriptionsx }) {
    return (
        <>
            <Box>
                <Stack sx={sx}>
                    <Stack>
                        <img src={src} height={"80px"} />

                    </Stack>
                    <Stack>
                        <Typography component="div" sx={textsx}>
                            {text}
                        </Typography>

                        <Typography component="div" sx={descriptionsx}>
                            {description}
                        </Typography>
                    </Stack>

                </Stack>
            </Box>


        </>
    );
}