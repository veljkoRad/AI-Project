import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import BlogNews from './BlogNews'
import TradingNewsData from "../../data/tradingNewsData"

const TradingNews = ({ }) => {
    const paginationClass = 'trading-pagination';
    const TradingSectionTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.secondary.main,
        textAlign: 'center'
    }))

    return (
        <Container maxWidth="md" sx={{ margin: '5rem auto' }} component="section">
            <Stack spacing={4} sx={{ position: 'relative' }}>
                <TradingSectionTitle variant="body2">Trading News</TradingSectionTitle>
                <Typography variant='h2' align='center'>Dynamic
                    <Box component="div" color="secondary.main" >World of Trading</Box>
                </Typography>
                <BlogNews paginationClass={paginationClass} newsData={TradingNewsData} />
            </Stack>
        </Container>
    )
}

export default TradingNews