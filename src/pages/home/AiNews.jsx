import React from 'react'
import BlogNews from './BlogNews'
import { BlogsNewsTypographyTitle } from '../../styles/homeStyled'
import { Container, Typography } from '@mui/material'
import AiNewsData from '../../data/aiNewsData'

const AiNews = () => {
    // I must have two separate classes so it my pagination dots would load two times.
    const paginationClass = 'ai-pagination'
    return (

        <Container component='section' maxWidth="md" sx={{ position: 'relative' }}>
            <BlogsNewsTypographyTitle variant="body2" >
                AI News
            </BlogsNewsTypographyTitle>
            <BlogNews paginationClass={paginationClass} newsData={AiNewsData} newsType='ai-news' />
        </Container>
    )
}

export default AiNews