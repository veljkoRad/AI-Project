import React from 'react'
import webinarsData from "../../data/webinarsData"
import { WebinarCard, WebinarCardMedia, WebinarIconButton } from "../../styles/homeStyled"
import { PlayArrow } from "@mui/icons-material"
import { Box, Container, Stack, Typography } from '@mui/material'


const NextWebinar = () => {
    const data = webinarsData;



    return (
        <Stack>
            <Box sx={{
                background: 'linear-gradient(to top, #00FBF4 0%, #071212 100%)', height: '10px',
                width: '100%'
            }} />
            <Box component='aside' sx={{ background: "url('/images/next-webinar-bg.png')", backgroundSize: 'contain', backgroundPositionX: "500px", backgroundColor: 'secondary.dark', padding: '1rem 0', backgroundRepeat: 'no-repeat' }}>
                <Container maxWidth="lg" component='section'>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems={{ xs: 'center', md: 'normal' }}
                        margin='auto'
                        justifyContent="space-evenly"
                    >
                        <Stack
                            component="article"
                            justifyContent='center'

                        >
                            <Typography variant="subtitle1" display={{ xs: 'none', md: 'block' }}>
                                Join our next Webinar
                            </Typography>
                            <Typography
                                // don't export too many atributes if they related only for this component
                                variant="h3"
                                sx={{ maxWidth: '400px' }}
                                textAlign={{ xs: 'center', md: 'left' }} >
                                The Future of
                                <Box component="div" sx={{ color: 'secondary.main' }}> AI Trading</Box>
                            </Typography>

                        </Stack>
                        <WebinarCard >
                            <WebinarCardMedia
                                // @ts-ignore
                                component="img" src={data[0].img} title="bull runing" />
                            <WebinarIconButton disableFocusRipple disableRipple>
                                <PlayArrow sx={{ fontSize: 60, color: 'white' }} />
                            </WebinarIconButton>
                        </WebinarCard>
                    </Stack>
                </Container>
            </Box  >
            <Box sx={{
                background: 'linear-gradient(to bottom, #00FBF4 0%, #071212 100%)', height: '10px',
                width: '100%'
            }} />
        </Stack>
    )
}

export default NextWebinar