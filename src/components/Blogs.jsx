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

    // Insert Fortrade component at position 2 in the data array
    const modifiedData = [
        ...data.slice(0, 2),
        { type: 'fortrade' },  // special item to represent Fortrade
        ...data.slice(2)
    ];

    return (
        <BlogsBox component='article'>
            <Container maxWidth="lg">
                <Stack gap='50px' alignItems='center'>
                    {modifiedData.map((item, index) => (
                        item.type === 'fortrade' ? (
                            <Fortrade key="fortrade" />
                        ) : (
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
                                                    pathname: `/single/${index}`,
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
                        )
                    ))}
                </Stack>
            </Container>
        </BlogsBox>
    );
}

export default Blogs;
