import React from 'react'
import LatestBlogs from './LatestBlogs'
import { LatestAiBox, LatestBlogsTypographyTitle } from '../../styles/homeStyled'
import { Container } from '@mui/material'
import aiData from '../../data/aiData'

const LatestAi = () => {
    // I must have two separate classes so it my pagination dots would load two times.
    const paginationClass = 'ai-pagination'
    return (
        <LatestAiBox>
            <Container component='section' maxWidth="lg" sx={{ position: 'relative' }}>
                <LatestBlogsTypographyTitle variant="body2" >
                    Latest AI News
                </LatestBlogsTypographyTitle>
                <LatestBlogs paginationClass={paginationClass} newsData={aiData} newsType='ai-news' />
            </Container>
        </LatestAiBox>
    )
}

export default LatestAi