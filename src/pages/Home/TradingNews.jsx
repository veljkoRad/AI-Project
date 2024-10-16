import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const TradingNews = () => {

    const TradingSectionTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.secondary.main,
        textAlign: 'center'
    }))

    return (
        <Container maxWidth="md" sx={{ padding: '5rem 0' }} component="section">
            <Stack spacing={2}>
                <TradingSectionTitle variant="body2"   >Trading News</TradingSectionTitle>
                <Typography variant='h2' align='center'>Dynamic
                    <Box component="div" color="secondary.main" >World of Trading</Box>
                </Typography>
            </Stack>
        </Container>
    )
}

export default TradingNews