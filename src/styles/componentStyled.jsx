// THis file is for styling components that are using in multiple other components

import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack, Button, ListItem } from "@mui/material";

// Banner Start
export const BannerBoxBg = styled(Box)(({ theme }) => ({
    backgroundImage: "url('/images/arms-background.png')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
        minHeight: '305px'
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: '242px'
    }
}))

export const BannerBoxContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    padding: '0 30px',
    width: '100%',
    maxWidth: '1280px',
    [theme.breakpoints.down('sm')]: {
        alignItems: 'center'
    }
}))

export const BannerBoxBlue = styled(Box)(({ theme }) => ({
    color: theme.palette.secondary.main,
    display: "inline"
}))

export const BannerBoxWhite = styled(Box)(({ theme }) => ({
    display: "inline"
}))

export const BannerTypographySubtitle = styled(Typography)(({ theme }) => ({
    textAlign: 'left',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))
// Banner End

// Navbar Start
export const LogoIcon = styled(Box)({
    width: '140px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.03)',
    },
})

export const NavBarListItem = styled(ListItem)(({ theme }) => ({
    cursor: 'pointer',
    padding: `0 ${theme.spacing(3)}`,
    [theme.breakpoints.down('md')]: {
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`
    },
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1)',
    },
}))
// Navbar End

// Footer Start
export const FooterBackground = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    backgroundImage: "url('/images/footerBG.png')",
    backgroundSize: '694px 150px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right -10px'
}))
// Footer End

// Fortrade Start
export const FortradeStack = styled(Stack)(({ theme }) => ({
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '32px'
    }
}))

export const FortradeBox = styled(Box)(({ theme }) => ({
    width: '237px',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
        width: '180px'
    }
}))

export const FortradeStackRight = styled(Stack)(({ theme }) => ({
    alignItems: 'start',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center'
    }
}))

export const FortradeTypography1 = styled(Typography)(({ theme }) => ({
    maxWidth: '356px',
    textAlign: 'start',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}))

export const FortradeTypography2 = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export const FortradeButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    border: '1px solid',
    padding: '6px 37px',
    transition: "transform 0.2s ease-in-out",
    '&:hover': {
        transform: 'scale(1.02)'
    }
}))
// Fortrade End
export const NextWebinarStack = styled(Stack)(({ theme }) => ({
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: '32px'
    }
}))

export const NextWebinarBox = styled(Box)(({ theme }) => ({
    width: '237px',
    height: 'auto',
    [theme.breakpoints.down('md')]: {
        width: '180px'
    }
}))

export const NextWebinarStackRight = styled(Stack)(({ theme }) => ({
    alignItems: 'start',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
        alignItems: 'center'
    }
}))

export const NextWebinarTypography1 = styled(Typography)(({ theme }) => ({
    maxWidth: '356px',
    textAlign: 'start',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}))

export const NextWebinarTypography2 = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

export const NextWebinarButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    border: '1px solid',
    padding: '6px 37px',
    transition: "transform 0.2s ease-in-out",
    '&:hover': {
        transform: 'scale(1.02)'
    }
}))
// NextWebinar Start

// NextWebinar End