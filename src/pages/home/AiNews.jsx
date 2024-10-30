import React from 'react'
import BlogNews from './BlogNews'
import { NewsSectionTitle } from '../../styles/homePageStyled'
import { Container } from '@mui/material'
import AiNewsData from '../../data/aiNewsData'

const AiNews = () => {
    const paginationClass = 'ai-pagination'
    return (
        <Container maxWidth="md" sx={{ position: 'relative' }}>
            <NewsSectionTitle variant="body2" >
                AI News
            </NewsSectionTitle>
            <BlogNews paginationClass={paginationClass} newsData={AiNewsData} />
        </Container>
    )
}

export default AiNews