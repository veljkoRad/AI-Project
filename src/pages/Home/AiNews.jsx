
import { Button, Card, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AiNewsSection, AiNewsSectionTitle, AiNewsCardMedia, AiNewsCardContent, AiNewsCardActions, AiNewsButtonTypography, AiNewsPagination } from "../../styles/HomePageStyled"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle'; //for Styling Pagination dots
import singlePostData from "../../data/singlePostData";
import WebinarsPost from "./WebinarsPost";

const AiNews = () => {
    const theme = useTheme();
    //useMediaQuery is React hook from materialUI.Down is max width that size and up is min width
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // AiPosts Component, I did like this instead of defining and mapping Card two times
    const AiPosts = singlePostData.map((post, index) => (
        <Card key={index} variant="outlined">
            <AiNewsCardMedia
                image={post.image}
                title={post.title}
            />
            <AiNewsCardContent >
                <Typography variant="subtitle1" >{post.content}</Typography>
            </AiNewsCardContent>
            <AiNewsCardActions >
                <Button size="medium" color="secondary" variant="outlined">
                    <AiNewsButtonTypography variant="button" color="secondary" >Read More</AiNewsButtonTypography>
                </Button>
            </AiNewsCardActions>
        </Card>
    ))

    return (
        <AiNewsSection >
            <Container maxWidth="md">
                <AiNewsSectionTitle variant="body2" >
                    AI News
                </AiNewsSectionTitle>

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
                        {singlePostData.map((post, index) => (
                            <SwiperSlide
                                key={index}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                {/* for example AiPosts[0] is first card. */}
                                {AiPosts[index]}

                            </SwiperSlide>
                        ))}

                    </Swiper>
                ) : (
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                        {AiPosts}
                    </Stack>
                )}
                <AiNewsPagination className="custom-pagination" />

                <WebinarsPost WebinarSectionTitle={AiNewsSectionTitle} />
            </Container>
        </AiNewsSection>
    );
};

export default AiNews;
