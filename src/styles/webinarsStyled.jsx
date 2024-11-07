import React from "react"
import { Box, Card, IconButton } from "@mui/material"
import { styled } from "@mui/material/styles";

export const WebinarsBox = styled(Box)(({ theme }) => ({
    background: 'url("/images/ai-news-background.png")',
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: 'contain',
    backgroundPosition: '-150px',
    backgroundRepeat: 'no-repeat'
}))

export const WebinarsIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.9
    },
}))

export const WebinarsCard = styled(Card)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1024px'
})

