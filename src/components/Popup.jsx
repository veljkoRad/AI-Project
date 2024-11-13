import React from 'react';
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { Box, Container, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle';
import { LatestBlogsCardActions, LatestBlogsCardContent, LatestBlogsCardMedia, LatestBlogsTypographyButton, LatestBlogsPagination, LatestBlogsCard } from "../styles/homeStyled";
import popupData from '../data/popupData';

const Popup = () => {
    const PopupDark = styled(Box)(({ theme }) => ({
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgb(0,0,0, 0.9)',
        opacity: '1',
        zIndex: '1101',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const popUpLinks = ['/ai-news', '/trading', '/trading']

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const SinglePost = popupData.map((post, index) => (
        <LatestBlogsCard component='article' key={index} variant="outlined">
            <LatestBlogsCardMedia image={post.image} title={post.name} />
            <LatestBlogsCardContent>
                <Typography variant="subtitle1">{post.title}</Typography>
            </LatestBlogsCardContent>
            <LatestBlogsCardActions>
                <Link href={post.links}>
                    <Button size="large" color="secondary" variant="outlined">
                        <LatestBlogsTypographyButton variant="button" color="secondary">
                            Read More
                        </LatestBlogsTypographyButton>
                    </Button>
                </Link>
            </LatestBlogsCardActions>
        </LatestBlogsCard>
    ));

    return (
        <PopupDark>
            <Container sx={{ position: 'relative' }}>
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
                            el: `.popup-pagination`,
                        }}
                        loop={true}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            margin: '0'
                        }}
                    >
                        {SinglePost.map((post, index) => (
                            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                {SinglePost[index]}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Stack direction="row" spacing={7} sx={{ justifyContent: 'space-between' }}>
                        {SinglePost}
                    </Stack>
                )}
                <LatestBlogsPagination className="popup-pagination" />
            </Container>
        </PopupDark>
    );
}

export default Popup;
