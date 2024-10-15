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
        // because BannerBg and BannerContainer are styled components I cannot use atribute like in box "component" that's why I use "as"
        <BannerBg as='main'>
            <BannerContainer as='div'>
                {children}
            </BannerContainer>
        </BannerBg>
    )
}

export default Banner