import React from "react"
import { Typography, Box } from "@mui/material"

const BannerHome = () => {
    return (
        <>
            <Typography variant="h1" align="center"  >
                <Box component="span" sx={{ color: 'secondary.main' }}>
                    Empower
                </Box> Your Trades
            </Typography>
            <Typography variant="subtitle1" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                AI Strategies for Tomorow's Investors
            </Typography>
        </>
    )
}

export default BannerHome