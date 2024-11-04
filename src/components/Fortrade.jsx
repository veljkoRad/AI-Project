import React from 'react'
import { FortradeStack, FortradeBox, FortradeStackRight, FortradeTypography1, FortradeTypography2, FortradeButton } from '../styles/componentStyled'
import { Box, Button, Container, Stack, Typography } from '@mui/material'


const Fortrade = () => {




    return (
        <Box component='aside' sx={{ backgroundColor: 'info.main', padding: '2rem 0' }}>
            <Container maxWidth="md">
                <FortradeStack >
                    <FortradeBox  // @ts-ignore
                        component='img' src='/images/fortrade-logo.png' />
                    <FortradeStackRight spacing={3}>
                        <FortradeTypography1 variant='h3' color='primary' >Explore the World of
                            Trading Possibilities</FortradeTypography1>
                        <FortradeTypography2 color='primary' variant='subtitle2'>Your trading Journey starts here.<br />
                            Create a risk-free account with virtual funds.</FortradeTypography2>
                        <FortradeButton size="medium" color="primary" variant="contained" >
                            <Typography variant='button' sx={{ textTransform: 'capitalize' }}>Get Started</Typography></FortradeButton>
                    </FortradeStackRight>
                </FortradeStack>

            </Container >

        </Box >
    )
}

export default Fortrade