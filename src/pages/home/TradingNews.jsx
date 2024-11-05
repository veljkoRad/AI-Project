import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { TradingNewsTypography } from '../../styles/homeStyled'
import BlogNews from './BlogNews'
import TradingNewsData from "../../data/tradingNewsData"

const TradingNews = ({ }) => {
    const paginationClass = 'trading-pagination';

    return (
        <Container maxWidth="md" sx={{ margin: '5rem auto' }} component="section">
            <Stack spacing={4} sx={{ position: 'relative' }}>
                <TradingNewsTypography variant="body2">Trading News</TradingNewsTypography>
                <Typography variant='h2' align='center'>Dynamic
                    <Box component="div" color="secondary.main" >World of Trading</Box>
                </Typography>
                <BlogNews paginationClass={paginationClass} newsData={TradingNewsData} newsType='trading-news' />
            </Stack>
        </Container>
    )
}

export default TradingNews