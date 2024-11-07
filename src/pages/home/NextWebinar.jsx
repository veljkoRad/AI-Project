import React, {  useState } from 'react'
import webinarsData from "../../data/webinarsData"
import { NextWebinarCard, NextWebinarCardMedia } from "../../styles/homeStyled"
import { Box, Button, Container, Stack, Typography } from '@mui/material'


const NextWebinar = () => {
    const data = webinarsData;
    const [hover, setHover]=useState(null);


    return (
        <Stack>
            <Box sx={{
                background: 'linear-gradient(to top, #00FBF4 0%, #071212 100%)', height: '10px',
                width: '100%'
            }} />
            <Box component='aside' sx={{ background: "url('/images/next-webinar-bg.png')", backgroundSize: 'contain', backgroundPositionX: "150px", backgroundColor: 'secondary.dark', padding: '40px 0', backgroundRepeat: 'no-repeat' }}>
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
                                variant="h3"
                                sx={{ maxWidth: '400px' }}
                                textAlign={{ xs: 'center', md: 'left' }} >
                                The Future of
                                <Box component="div" sx={{ color: 'secondary.main' }}> AI Trading</Box>
                            </Typography>

                        </Stack>
                        <NextWebinarCard >
                            <NextWebinarCardMedia
                                // @ts-ignore
                                component="div" 
                                sx={{backgroundImage:`url(${data[0].img})`}}
                                title="bull runing"
                                onMouseEnter={()=>setHover(1)} 
                                onMouseLeave={() => setHover(null)}
                            >
                                {  hover== 1 && (
                                    <Box  sx={{position:'absolute',background:'#000',width:'100%',height:'100%', opacity:'0.8', zIndex:'2'}}>
                                    <Button sx={{
                                        position:'absolute', top:'50%',left:'50%',transform:'translate(-50%, -50%)',textTransform:'capitalize',zIndex:'3'
                                    }} color='secondary'size='large' variant='contained' ><Typography variant='body2' color='primary'>Sign Up</Typography></Button>
                                    </Box>
                                    )                                    
                                }
                             </NextWebinarCardMedia>
                        </NextWebinarCard>
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