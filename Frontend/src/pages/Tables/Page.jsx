import React from 'react'
import { Button, Box } from "@mui/material";
import BasicModal from './modal';
export default function Tables() {
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                gap: 2,
                width: "100vw",
                height: "50vh"
            }}
        >
            <BasicModal/>
           
        </Box>

    )
}
