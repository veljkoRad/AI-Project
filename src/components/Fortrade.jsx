import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'


const Fortrade = () => {

    const FortradeCard = styled(Card)(({theme})=> ({
        display: 'flex', 
        maxWidth: '100%', 
        justifyContent:'space-between',
        [theme.breakpoints.down('md')]:{
            flexDirection:'column-reverse',
            maxWidth:'450px'
        }
    }))

    const FortradeCardContent = styled(Card)(({theme})=> ({
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems:'flex-start',
        padding:'20px',
        border:'none',
        gap:'16px'
    }))

    const FortradeCardMedia = styled(Card)(({theme})=> ({
        backgroundImage: `url("/images/FT-banner.png")`,
        backgroundColor: '#02706d',
        backgroundSize: '768px 250px',
        backgroundPosition: 'center',
        position: 'relative',
        cursor: 'pointer',
        minWidth: '768px',
        height: '250px',
        border:'none',
        [theme.breakpoints.down('md')]:{
            backgroundPosition:'-200px'
        }
    }))


    return (
        <FortradeCard sx={{
            
        }}>
          
            <FortradeCardContent  >
                <Typography color='secondary' variant='body1' sx={{fontWeight:'600'}}>Your trading Journey starts here</Typography>
                <Typography> Create a demo account</Typography>
                <Button variant='outlined' color='secondary' size='large'>
                    <Typography variant='button' sx={{ textTransform: 'capitalize' }}>Get Started</Typography>
                </Button>
            </FortradeCardContent>
            <FortradeCardMedia component='div'
                sx={{
                   
                }}>
            </FortradeCardMedia>


        </FortradeCard >
    )
}

export default Fortrade