import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import bannerData from '../../data/bannerData'
import aiData from '../../data/aiData'
import tradingData from '../../data/tradingData'
import { Box, Container, Card, CardMedia, Stack, Typography } from '@mui/material';

const Single = () => {
    const router = useRouter();
    const { id, newsType } = router.query;
    const [single, setSingle] = useState(null);


    useEffect(() => {
        if (id && newsType) {
            // Choose what data to take
            const data = newsType === "ai-news" ? aiData : tradingData;

            //Now take single data from dataArray
            const foundSingle = data.find((singleData, index) => index === parseInt(id, 10)); // Use parseInt to ensure id is a number
            setSingle(foundSingle); // Set the found post in state
        }
    }, [id, newsType]); //This says that whenever id or newsType is changed run again


    if (!single) return <p>Loading...</p>; // This will show until post is found

    return (
        <>
            <NavBar />
            <Banner data={newsType === 'ai-news' ? bannerData.aiNews : bannerData.trading} />
            <Box sx={{ backgroundImage: "url('/images/ai-news-background.png')" }}>
                <Container maxWidth="md" component='section' sx={{ padding: '80px 30px !important' }}>
                    <Stack gap='40px'>
                        <Card sx={{ position: 'relative', display: 'flex', justifyContent: 'center', maxWidth: '1024px', height: '400px' }}>
                            <CardMedia
                                component="img"
                                src={single.image}
                                title="bull runing">
                            </CardMedia>
                        </Card>
                        <Typography color='secondary' style={{ fontWeight: '600', textAlign: 'center' }}>{single.title}</Typography>
                        <Typography>
                            {single.content}
                        </Typography>
                    </Stack>
                </Container>
            </Box>
            <Footer />
        </>

    )
}

export default Single