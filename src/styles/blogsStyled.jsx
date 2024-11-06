import React from "react"
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { styled } from "@mui/material/styles";

// BlogsAll Start
export const BlogsAllBox = styled(Box)({
    padding: '80px 0',
    background: 'url("/images/ai-news-background.png")',
})

export const BlogsAllCard = styled(Card)(({ theme }) => ({
    maxWidth: '100%',
    display: 'flex',
    border: '1px,solid #fff',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        maxWidth: '450px',
        margin: 'auto',
        maxHeight: '820px'
    }
}))

export const BlogsAllCardMedia = styled(CardMedia)(({ theme }) => ({
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    position: 'relative',
    cursor: 'pointer',
    minWidth: '450px',
    height: '470px',
    [theme.breakpoints.down('sm')]: {
        backgroundSize: '450px 254px',
        minWidth: '200px',
        height: '254px'
    }
}))

export const BlogsAllCardContent = styled(CardContent)(({ theme }) => ({
    padding: '15px',
    paddingBottom: '15px !important'
}))

export const BlogsAllTypographyTitle = styled(Typography)({
    fontWeight: '600',
    paddingBottom: '15px'
})

export const BlogsAllTypographyContent = styled(Typography)({
    overflow: 'hidden',
    maxHeight: '155px'
})

export const BlogsAllBoxHover = styled(Box)({
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '1',
    background: 'rgb(0, 0, 0, 0.8)',
    transition: ' 2s ease',
})
export const BlogsAllButton = styled(Button)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '1',
    background: '#000',
})
// BlogsAll End