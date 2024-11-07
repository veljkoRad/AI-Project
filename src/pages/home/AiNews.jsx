import React from 'react'
import BlogNews from './BlogNews'
import { AiNewsBox, BlogsNewsTypographyTitle } from '../../styles/homeStyled'
import { Container } from '@mui/material'
import AiNewsData from '../../data/aiNewsData'

const AiNews = () => {
    // I must have two separate classes so it my pagination dots would load two times.
    const paginationClass = 'ai-pagination'
    return (
        <AiNewsBox>
            <Container component='section' maxWidth="lg" sx={{ position: 'relative' }}>
                <BlogsNewsTypographyTitle variant="body2" >
                    Latest AI News
                </BlogsNewsTypographyTitle>
                <BlogNews paginationClass={paginationClass} newsData={AiNewsData} newsType='ai-news' />
            </Container>
        </AiNewsBox>
    )
}

export default AiNews