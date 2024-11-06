import React from "react"
import {
    BannerBoxBg,
    BannerBoxContainer,
    BannerBoxBlue,
    BannerBoxWhite,
    BannerTypographySubtitle
} from "../styles/componentStyled"
import { Typography } from "@mui/material"



const Banner = ({ data }) => {

    return (
        // because BannerBg and BannerContainer are styled components I cannot use atribute like in box "component" that's why I use "as"
        <BannerBoxBg as='main'>
            <BannerBoxContainer
                as='div'
                sx={{
                    minHeight: data.bannerHeight,
                    alignItems: data.bannerAlign
                }}
            >
                <Typography variant="h1" textAlign='center' >
                    <BannerBoxBlue component="span" >
                        {data.blueMain}
                    </BannerBoxBlue>
                    <BannerBoxWhite component="span" >
                        {data.whiteMain}
                    </BannerBoxWhite>
                </Typography>
                <BannerTypographySubtitle variant="subtitle1" >
                    {data.subtitle}
                </BannerTypographySubtitle>
            </BannerBoxContainer>
        </BannerBoxBg>
    )
}

export default Banner