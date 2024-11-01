import React from 'react'
import { Box, Stack, Container, Card, CardContent, CardMedia, Typography } from '@mui/material'
import AiNewsData from '../../data/aiNewsData'


const Blogs = () => {
    const data = AiNewsData
    return (
        <Box component='article' sx={{ padding: '80px 0' }}>
            <Container maxWidth="md">
                <Stack gap='122px'>
                    {data.map((item, index) => (
                        <Card key={index} sx={{ maxWidth: '100%', display: 'flex' }}>
                            <CardMedia
                                component='div'
                                sx={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'unset',
                                    width: '350px',
                                    height: '200px',
                                    minWidth: '246px',
                                    height: '234px'
                                }}
                                title={item.name}
                            />
                            <CardContent sx={{ padding: '0', paddingBottom: '0 !important' }}>
                                <Typography>{item.title}</Typography>
                                <Typography>{item.content}</Typography>

                            </CardContent>
                        </Card>
                    ))}

                </Stack>
            </Container>
        </Box>
    )
}

export default Blogs