import React from 'react'
import {
    BlogsAllBox,
    BlogsAllCard,
    BlogsAllCardMedia,
    BlogsAllCardContent,
    BlogsAllTypographyTitle,
    BlogsAllTypographyContent
} from '../styles/blogsStyled'
import { Stack, Container } from '@mui/material'

const BlogsAll = ({ data }) => {

    return (
        <BlogsAllBox component='article' >
            <Container maxWidth="md">
                <Stack gap='122px'>
                    {data.map((item, index) => (
                        <BlogsAllCard key={index} >
                            <BlogsAllCardMedia
                                component='div'
                                sx={{
                                    backgroundImage: `url(${item.image})`
                                }}
                                title={item.name}
                            />
                            <BlogsAllCardContent>
                                <BlogsAllTypographyTitle color='secondary' >{item.title}</BlogsAllTypographyTitle>
                                <BlogsAllTypographyContent >{item.content}</BlogsAllTypographyContent>
                            </BlogsAllCardContent>
                        </BlogsAllCard>
                    ))}
                </Stack>
            </Container>
        </BlogsAllBox>
    )
}

export default BlogsAll
