import React from "react";
import { Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import { NewsSectionTitle, BlogPagination } from "../../styles/HomePageStyled"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle'; //for Styling Pagination dots
import SinglePost from "../../data/SinglePost";

const AiNews = () => {
    const theme = useTheme();
    //useMediaQuery is React hook from materialUI.Down is max width that size and up is min width
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // SinglePost Component, I did like this instead of defining and mapping Card two times


    return (

        <Container maxWidth="md" sx={{ position: 'relative' }}>
            <NewsSectionTitle variant="body2" >
                AI News
            </NewsSectionTitle>

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
                        el: '.custom-pagination',
                    }}
                    loop={true}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {singlePost.map((post, index) => (
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
                <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                    {SinglePost}
                </Stack>
            )}
            <BlogPagination className="custom-pagination" />
        </Container>
    );
};

export default AiNews;
