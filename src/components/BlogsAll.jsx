import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {
    BlogsAllBox,
    BlogsAllCard,
    BlogsAllCardMedia,
    BlogsAllCardContent,
    BlogsAllTypographyTitle,
    BlogsAllTypographyContent,
    BlogsAllBoxHover,
    BlogsAllButton
} from '../styles/blogsStyled'
import { BlogNewsTypographyButton } from '../styles/homeStyled'
import { Stack, Container } from '@mui/material'



const BlogsAll = ({ data, newsType }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <BlogsAllBox component='article' >
            <Container maxWidth="lg">
                <Stack gap='50px'>
                    {data.map((item, index) => (
                        <BlogsAllCard key={index} >
                            <BlogsAllCardMedia
                                component='div'
                                sx={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                                title={item.name}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index && (

                                    <BlogsAllBoxHover>
                                        <Link
                                            href={{
                                                pathname: `/single/${index}`,
                                                query: { newsType }
                                            }}>
                                            <BlogsAllButton size="medium" color="secondary" variant="outlined"
                                                sx={{

                                                }}>
                                                <BlogNewsTypographyButton>Read More</BlogNewsTypographyButton>

                                            </BlogsAllButton>
                                        </Link>
                                    </BlogsAllBoxHover>
                                )}
                            </BlogsAllCardMedia>
                            <BlogsAllCardContent>
                                <BlogsAllTypographyTitle color='secondary' >{item.title}</BlogsAllTypographyTitle>
                                <BlogsAllTypographyContent >{item.content}</BlogsAllTypographyContent>
                            </BlogsAllCardContent>
                        </BlogsAllCard>
                    ))}
                </Stack>
            </Container>
        </BlogsAllBox >
    )
}

export default BlogsAll
