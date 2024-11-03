// THis file is for styling components that are using in multiple other components

import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

// Banner Start
export const BannerBoxContainer = styled(Box)({
    display: 'flex',        
    padding: '1rem',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '800px'
})

export const BannerBoxBg = styled(Box)(({ theme }) => ({
    backgroundImage: "url('/images/arms-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        minHeight: '305px'
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '242px'
    }
}))

export const BannerBoxBlue = styled(Box)(({ theme }) => ({
    color: theme.palette.secondary.main, 
    display: "inline"
}))

export const BannerBoxWhite = styled(Box)(({ theme }) => ({
    display: "inline"
}))

export const BannerTypographySubtitle=styled(Typography) (({theme})=>({
    textAlign:'left',
    display:'block',
    [theme.breakpoints.down('sm')]:{
        display:'none'
    }   
}))
// Banner End

// Navbar Start
export const LogoIcon=styled(Box)({
    width: '140px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
    },
})
// Navbar End
