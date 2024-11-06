import React from "react";
import Link from "next/link";
import { Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BlogNewsCardActions, BlogNewsCardContent, BlogNewsCardMedia, BlogNewsTypographyButton, BlogNewsPagination, BlogNewsCard } from "../../styles/homeStyled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle'; //for Styling Pagination dots




const BlogNews = ({ paginationClass, newsData, newsType }) => {

    const theme = useTheme();
    //useMediaQuery is React hook from materialUI.Down is max width that size and up is min width
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // SinglePost Component, I did like this instead of defining and mapping Card two times
    const SinglePost = newsData.map((post, index) => (
        <BlogNewsCard component='article'
            key={index}
            variant="outlined"

        >
            <BlogNewsCardMedia image={post.image} title={post.name} />
            <BlogNewsCardContent>
                <Typography variant="subtitle1">{post.title}</Typography>
            </BlogNewsCardContent>
            <BlogNewsCardActions>
                <Link
                    href={{
                        pathname: `/single/${index}`,
                        query: { newsType }
                    }}>
                    <Button size="medium" color="secondary" variant="outlined">
                        <BlogNewsTypographyButton variant="button" color="secondary">
                            Read More
                        </BlogNewsTypographyButton>
                    </Button>
                </Link>
            </BlogNewsCardActions>
        </BlogNewsCard>
    ))


    return (

        <>
            {isMobile ? (
                <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        800: { slidesPerView: 2 }
                    }}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        //With this 'el' class I can add div outside container and  it will load dots in that div.
                        //Why outside cointainer?
                        //Because when I set to dots bottom:-200px They are hidden.
                        el: `.${paginationClass}`,
                    }}
                    loop={true}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {SinglePost.map((post, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {/* for example SinglePost[0] is first card. */}
                            {SinglePost[index]}

                        </SwiperSlide>
                    ))}

                </Swiper>
            ) : (
                <Stack direction="row" spacing={7} sx={{ justifyContent: 'space-between' }}>
                    {SinglePost}
                </Stack>
            )}
            <BlogNewsPagination className={paginationClass} />
        </>

    );
};

export default BlogNews;