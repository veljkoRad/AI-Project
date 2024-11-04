import React from "react"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { styled } from "@mui/material/styles";

// BlogsAll Start
export const BlogsAllBox = styled(Box)({
    padding: '80px 0',
    background: 'url("/images/ai-news-background.png")',
})

export const BlogsAllCard = styled(Card)(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '236px',
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
    backgroundSize: '415px 234px;',
    backgroundPosition: 'center',
    minWidth: '280px',
    height: '234px',
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
// BlogsAll End