import React from "react"
import {styled} from "@mui/material/styles"
import { Box } from "@mui/material"



const Banner = ({ children }) => {



    // Banner Background Component
    const BannerBg = styled(Box)({
        backgroundImage: "url('/images/arms-background.png')",
        backgroundSize: 'cover',
        minHeight: '407px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem'
    })

    //Banner Container Component
    const BannerContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: '734px'
    })


    return (
        <BannerBg component='main'>
            <BannerContainer component='div'>
                {children}
            </BannerContainer>
        </BannerBg>
    )
}

export default Banner