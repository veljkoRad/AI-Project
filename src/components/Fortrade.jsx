import React from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'


const Fortrade = () => {




    return (
        <Card sx={{
            display: 'flex', maxWidth: '100%'
        }}>
            <CardMedia component='div'
                sx={{
                    backgroundImage: `url("/images/fortrade-logo.png")`,
                    backgroundColor: '#02706d',
                    backgroundSize: '250px 71px',
                    backgroundPosition: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    minWidth: '450px',
                    height: '250px',
                }}>
            </CardMedia>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }} >
                <Typography>Your trading Journey starts here</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora quas non necessitatibus laboriosam. Delectus ducimus quisquam numquam libero reprehenderit sint non molestiae modi, praesentium obcaecati aliquid aliquam? Unde, recusandae!</Typography>
                <Button variant='outlined' color='secondary'>
                    <Typography variant='button' sx={{ textTransform: 'capitalize' }}>Get Started</Typography>
                </Button>
            </CardContent>


        </Card >
    )
}

export default Fortrade