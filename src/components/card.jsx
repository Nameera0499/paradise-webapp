import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';

export default function Recommend({ src, label, height, width, style }) {
  return (
    <>
      <Box>
        <Stack sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img src={src} height={height} width={width} style={style} />

          <Typography component="div" sx={{ fontSize: { xs: "16px", sm: "24px" }, fontWeight: 900, mt: 3, marginLeft: "-50px" }}>
            {label}
          </Typography>
        </Stack>
      </Box>


    </>
  );
}