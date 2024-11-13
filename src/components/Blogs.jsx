import React, { useState } from 'react';
import Link from 'next/link';
import {
    BlogsBox,
    BlogsCard,
    BlogsCardMedia,
    BlogsCardContent,
    BlogsTypographyTitle,
    BlogsTypographyContent,
    BlogsBoxHover,
    BlogsButton
} from '../styles/blogsStyled';
import Fortrade from './Fortrade';
import { LatestBlogsTypographyButton } from '../styles/homeStyled';
import { Stack, Container } from '@mui/material';

const Blogs = ({ data, newsType }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const modifiedData = [
        ...data.slice(0, 2),
        { type: 'fortrade' },  // special item to represent Fortrade
        ...data.slice(2)
    ];

    let postIndex = 0; // Counter for the blog posts

    return (
        <BlogsBox component='article'>
            <Container maxWidth="lg">
                <Stack gap='50px' alignItems='center'>
                    {modifiedData.map((item, index) => {
                        if (item.type === 'fortrade') {
                            return <Fortrade key="fortrade" />;
                        } else {
                            const currentIndex = postIndex; // Capture the current post index
                            postIndex++; // Increment only for actual blog posts
                            return (
                                <BlogsCard key={index}>
                                    <BlogsCardMedia
                                        component='div'
                                        sx={{ backgroundImage: `url(${item.image})` }}
                                        title={item.name}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        {hoveredIndex === index && (
                                            <BlogsBoxHover>
                                                <Link
                                                    href={{
                                                        pathname: `/single/${currentIndex}`,  // Use the blog post index
                                                        query: { newsType }
                                                    }}
                                                >
                                                    <BlogsButton size="medium" color="secondary" variant="outlined">
                                                        <LatestBlogsTypographyButton>Read More</LatestBlogsTypographyButton>
                                                    </BlogsButton>
                                                </Link>
                                            </BlogsBoxHover>
                                        )}
                                    </BlogsCardMedia>
                                    <BlogsCardContent>
                                        <BlogsTypographyTitle color='secondary'>{item.title}</BlogsTypographyTitle>
                                        <BlogsTypographyContent>{item.content}</BlogsTypographyContent>
                                    </BlogsCardContent>
                                </BlogsCard>
                            );
                        }
                    })}
                </Stack>
            </Container>
        </BlogsBox>
    );
}

export default Blogs;
