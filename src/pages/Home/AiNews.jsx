
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle'; //for Styling Pagination dots
import singlePostData from "../../data/singlePostData";
import WebinarsPost from "./WebinarsPost";

const AiNews = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); //useMediaQuery is React hook from materialUI.Down is max width that size and up is min width
    const isAbove992px = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box component="section" sx={{ padding: '5rem 0', background: 'url("images/ai-news-background.png")', backgroundSize: '1100px 633px', backgroundRepeat: 'no-repeat', backgroundPosition: 'left', backgroundColor: 'primary.dark' }}>
            <Container maxWidth="md">
                <Typography
                    variant="body2"
                    color="secondary"
                    textAlign={{ xs: 'center', md: 'left' }}
                    sx={{ marginBottom: '1.5rem' }}>
                    AI News
                </Typography>

                {isMobile ? (
                    <Swiper
                        spaceBetween={10}

                        breakpoints={{
                            0: {
                                slidesPerView: 1,

                            },
                            800: {
                                slidesPerView: 2,
                            }
                        }}
                        modules={[Pagination]}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination', //With this I can add div outside container and giving him this class it will load dots in that div.Why outside cointainer?Because when I set to dots bottom:-200px They are hidden.
                        }}


                        loop={true}
                        style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        {singlePostData.map((post, index) => (
                            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card variant="outlined">
                                    <CardMedia
                                        sx={{ height: 183 }}
                                        image={post.image}
                                        title={post.title}
                                    />
                                    <CardContent sx={{ minHeight: { xs: '64px', md: '108.5px' } }}>
                                        <Typography variant="subtitle1" >{post.content}</Typography>
                                    </CardContent>
                                    <CardActions sx={{ padding: '8px 16px 16px' }}>
                                        <Button size="medium" color="secondary" variant="outlined">
                                            <Typography variant="button" color="secondary" sx={{ textTransform: 'capitalize' }}>Read More</Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                ) : (
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                        {singlePostData.map((post, index) => (
                            <Card key={index} variant="outlined">
                                <CardMedia
                                    sx={{ height: 183 }}
                                    image={post.image}
                                    title={post.title}
                                />
                                <CardContent sx={{ minHeight: '116px' }}>
                                    <Typography variant="subtitle1" >{post.content}</Typography>
                                </CardContent>
                                <CardActions sx={{ padding: '8px 16px 16px' }}>
                                    <Button size="medium" color="secondary" variant="outlined">
                                        <Typography variant="button" color="secondary" sx={{ textTransform: 'capitalize' }}>Read More</Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Stack>
                )}
                <div className="custom-pagination" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: '-210px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 999,
                    display: isAbove992px ? 'none' : 'flex',
                }} />

                <WebinarsPost />
            </Container>
        </Box>
    );
};

export default AiNews;
