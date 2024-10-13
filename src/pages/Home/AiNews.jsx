
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle'; //for Styling Pagination dots
import singlePostData from "../../data/singlePostData";
import WebinarsPost from "./WebinarsPost";

const AiNews = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md')); //useMediaQuery is React hook from materialUI.Down is max width that size and up is min width

    const AiNewsSection =styled(Box)(({theme}) =>({
        padding: '5rem 0', 
        background: 'url("images/ai-news-background.png")', 
        backgroundSize: '1100px 633px', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'left', 
        backgroundColor: theme.palette.primary.dark 
    }))

    const AiNewsSectionTitle =styled(Typography)(({theme}) => ({
        color:theme.palette.secondary.main,
        textAlign:'left',
        // when I want to use the dynamic expressions as a key, I need to wrap it in square brackets [].down() is a method
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
          },
        marginBottom:'1.5rem'        
    }))

    const MyCardMedia=styled(CardMedia)({
        height:'183px'
    })

    const MyCardContent=styled(CardContent)(({theme})=>({
            minHeight: '116px',
            [theme.breakpoints.down('md')]: {
                minHeight:'64px'
            }
    }))

    const MyCardActions =styled(CardActions)({
            padding: '8px 16px 16px' 
    })

    const ButtonTypography = styled(Typography)({
        textTransform: 'capitalize'
    })

    const CustomPagination=styled('div')(({theme})=>({
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '-210px !important',
        left: '50% !important',
        transform: 'translateX(-50%)',
        zIndex: 999,
        display:'none',
       [theme.breakpoints.down('md')]:{
        display:'flex'
       }
    }))


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
                            0: {slidesPerView: 1},
                            800: {slidesPerView: 2}
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
                                <Card variant="outlined">
                                    <MyCardMedia
                                        image={post.image}
                                        title={post.title}
                                    />
                                    <MyCardContent >
                                        <Typography variant="subtitle1" >{post.content}</Typography>
                                    </MyCardContent>
                                    <MyCardActions>
                                        <Button size="medium" color="secondary" variant="outlined">
                                            <ButtonTypography variant="button" color="secondary">Read More</ButtonTypography>
                                        </Button>
                                    </MyCardActions>
                                </Card>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                ) : (
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'space-between' }}>
                        {singlePostData.map((post, index) => (
                            <Card key={index} variant="outlined">
                                <MyCardMedia
                                    image={post.image}
                                    title={post.title}
                                />
                                <MyCardContent >
                                    <Typography variant="subtitle1" >{post.content}</Typography>
                                </MyCardContent>
                                <MyCardActions >
                                    <Button size="medium" color="secondary" variant="outlined">
                                        <ButtonTypography variant="button" color="secondary" >Read More</ButtonTypography>
                                    </Button>
                                </MyCardActions>
                            </Card>
                        ))}
                    </Stack>
                )}
                <CustomPagination className="custom-pagination" />

                <WebinarsPost />
            </Container>
            </AiNewsSection>
    );
};

export default AiNews;
