import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import bannerData from "../../data/bannerData"
import webinarsData from "../../data/webinarsData"
import { Card, CardContent, CardMedia, Container, IconButton, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PlayArrow } from '@mui/icons-material'

export const WebinarsIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.9
    },
}))

export const WebinarsCard = styled(Card)({
    position: 'relative', display: 'flex', justifyContent: 'center', maxWidth: '1024px'
})



const data = webinarsData;

const Webinars = () => {


    return (
        <>
            <NavBar />
            <Banner data={bannerData.webinars} />
            <Container maxWidth="md" component='section' sx={{ padding: '80px 30px !important' }}>
                <Stack gap='40px'>
                    <WebinarsCard >
                        <CardMedia
                            component="img"
                            src={data[0].img}
                            title="bull runing">
                        </CardMedia>
                        <WebinarsIconButton color="secondary">
                            <PlayArrow sx={{ fontSize: 60, color: 'white' }} />
                        </WebinarsIconButton>
                    </WebinarsCard>
                    <Typography color='secondary' style={{ fontWeight: '600', textAlign: 'center' }}>{data[0].title}</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quod id voluptatum libero impedit officia vero laudantium molestiae perspiciatis veniam consequatur dolores dolore laborum excepturi. Fuga rem earum minima! Dolores. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis fugiat vel tempora accusantium expedita inventore. Laborum, rem neque fugiat doloribus consequatur nulla! Eos consequatur sit est necessitatibus velit voluptatibus! <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus dolorem quia veritatis dicta molestiae ad aut voluptatem necessitatibus consequatur, eum magnam sequi earum dolores facilis inventore dignissimos eligendi ex tempore?
                    </Typography>
                </Stack>
            </Container>
            <Footer />
        </>
    )
}

export default Webinars