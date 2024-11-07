import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import {  LatestTradingTypography,  LatestTradingBox } from '../../styles/homeStyled'
import LatestBlogs from './LatestBlogs'
import tradingData from "../../data/tradingData"

const LatestTrading = ({ }) => {
    const paginationClass = 'trading-pagination';

    return (
        <LatestTradingBox component="section">
            <Container maxWidth="lg" >
                <Stack sx={{ position: 'relative' }}>
                    <LatestTradingTypography LatestTradingTypography variant="body2">Trading News</LatestTradingTypography>
                    <Typography variant='h2' align='center' sx={{ margin: '5px 0 25px' }} >Dynamic <Box component='span' sx={{ color: '#00FBF4' }}>World of Trading</Box></Typography>


                    <LatestBlogs
                        paginationClass={paginationClass}
                        newsData={tradingData}
                        newsType='trading-news'
                    />
                </Stack>
            </Container>
        </LatestTradingBox>
    )
}

export default LatestTrading