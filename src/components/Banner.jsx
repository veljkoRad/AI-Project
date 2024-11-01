import React from "react"
import { styled } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"



const Banner = ({ data }) => {
    // Banner Background Component
    const BannerBg = styled(Box)(({ theme }) => ({
        backgroundImage: "url('/images/arms-background.png')",
        backgroundSize: 'cover',
        minHeight: data.bannerHeight,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        [theme.breakpoints.down('md')]: {
            minHeight: '305px'
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '242px'
        }
    }))

    //Banner Container Component
    const BannerContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '734px'
    })

    return (
        // because BannerBg and BannerContainer are styled components I cannot use atribute like in box "component" that's why I use "as"
        <BannerBg as='main'>
            <BannerContainer as='div'>
                <Typography variant="h1" align="center"  >
                    <Box component="span" sx={{ color: "secondary.main", display: "inline" }}>
                        {data.blueMain}
                    </Box>
                    {data.blueMain === "Empower" && " "}
                    <Box component="span" sx={{ color: "text.primary", display: "inline" }}>
                        {data.whiteMain}
                    </Box>
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: { xs: 'center', sm: 'left' }, display: { xs: 'none', sm: 'block' } }}>
                    {data.subtitle}
                </Typography>
            </BannerContainer>
        </BannerBg>
    )
}

export default Banner