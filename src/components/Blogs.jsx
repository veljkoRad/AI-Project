import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {
    BlogsBox,
    BlogsCard,
    BlogsCardMedia,
    BlogsCardContent,
    BlogsTypographyTitle,
    BlogsTypographyContent,
    BlogsBoxHover,
    BlogsButton
} from '../styles/blogsStyled'
import Fortrade from './Fortrade'
import { LatestBlogsTypographyButton } from '../styles/homeStyled'
import { Stack, Container } from '@mui/material'



const Blogs = ({ data, newsType }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <BlogsBox component='article' >
            <Container maxWidth="lg">
                <Stack gap='50px'  alignItems='center'>
                    {data.map((item, index) => (
                        <BlogsCard key={index} >
                            <BlogsCardMedia
                                component='div'
                                sx={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                                title={item.name}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {hoveredIndex === index && (

                                    <BlogsBoxHover>
                                        <Link
                                            href={{
                                                pathname: `/single/${index}`,
                                                query: { newsType }
                                            }}>
                                            <BlogsButton size="medium" color="secondary" variant="outlined"
                                                sx={{

                                                }}>
                                                <LatestBlogsTypographyButton>Read More</LatestBlogsTypographyButton>

                                            </BlogsButton>
                                        </Link>
                                    </BlogsBoxHover>
                                )}
                            </BlogsCardMedia>
                            <BlogsCardContent>
                                <BlogsTypographyTitle color='secondary' >{item.title}</BlogsTypographyTitle>
                                <BlogsTypographyContent >{item.content}</BlogsTypographyContent>
                            </BlogsCardContent>
                        </BlogsCard>
                    ))}
                    <Fortrade />
                </Stack>
            </Container>
        </BlogsBox >
    )
}

export default Blogs
