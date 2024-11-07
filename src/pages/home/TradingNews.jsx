import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { TradingNewsTypography, TradingNewsBox } from '../../styles/homeStyled'
import BlogNews from './BlogNews'
import TradingNewsData from "../../data/tradingNewsData"

const TradingNews = ({ }) => {
    const paginationClass = 'trading-pagination';

    return (
        <TradingNewsBox component="section">
            <Container maxWidth="lg" >
                <Stack sx={{ position: 'relative' }}>
                    <TradingNewsTypography variant="body2">Trading News</TradingNewsTypography>
                    <Typography variant='h2' align='center' sx={{ margin: '5px 0 25px' }} >Dynamic <Box component='span' sx={{ color: '#00FBF4' }}>World of Trading</Box></Typography>


                    <BlogNews
                        paginationClass={paginationClass}
                        newsData={TradingNewsData}
                        newsType='trading-news'
                    />
                </Stack>
            </Container>
        </TradingNewsBox>
    )
}

export default TradingNews