import { styled } from '@mui/material/styles'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const Fortrade = () => {

    const FortradeStack = styled(Stack)(({ theme }) => ({
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: '32px'
        }
    }))

    const FortradeButton = styled(Button)(({ theme }) => ({
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        border: '1px solid',
        padding: '6px 37px',
        transition: "transform 0.2s ease-in-out",
        '&:hover': {
            transform: 'scale(1.02)'
        }
    }))

    const FortradeLogo = styled(Box)(({ theme }) => ({
        width: '237px',
        height: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '180px'
        }
    }))

    const FortradeRightStack = styled(Stack)(({ theme }) => ({
        alignItems: 'start',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            alignItems: 'center'
        }
    }))

    const FortradeTypography1 = styled(Typography)(({ theme }) => ({
        maxWidth: '356px',
        textAlign: 'start',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        }
    }))

    const FortradeTypography2 = styled(Typography)(({ theme }) => ({
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))


    return (
        <Box component='aside' sx={{ backgroundColor: 'info.main', padding: '2rem 0' }}>
            <Container maxWidth="md">
                <FortradeStack >
                    <FortradeLogo  // @ts-ignore
                        component='img' src='/images/fortrade-logo.png' />
                    <FortradeRightStack spacing={3}>
                        <FortradeTypography1 variant='h3' color='primary' >Explore the World of
                            Trading Possibilities</FortradeTypography1>
                        <FortradeTypography2 color='primary' variant='subtitle2'>Your trading Journey starts here.<br />
                            Create a risk-free account with virtual funds.</FortradeTypography2>
                        <FortradeButton size="medium" color="primary" variant="contained" >
                            <Typography variant='button' sx={{ textTransform: 'capitalize' }}>Get Started</Typography></FortradeButton>
                    </FortradeRightStack>
                </FortradeStack>

            </Container >

        </Box >
    )
}

export default Fortrade