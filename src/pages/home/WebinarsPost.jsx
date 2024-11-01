import React from "react"
import { Stack, Typography, Box, Container } from "@mui/material"
import { PlayArrow } from "@mui/icons-material"
import { WebinarCard, WebinarCardMedia, WebinarIconButton, NewsSectionTitle } from "../../styles/homeStyled"


const WebinarsPost = () => {


    return (
        <Container maxWidth="md">
            <NewsSectionTitle
                variant="body2"
                sx={{
                    margin: {
                        xs: '5rem 0 1.5rem',
                        md: '2.5rem 0 3.5rem'
                    }
                }}>
                Join our next Webinar
            </NewsSectionTitle>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ xs: 'center', md: 'normal' }}
            >
                <Stack
                    component="article"
                    justifyContent="space-between"
                    sx={{ flexGrow: 5 }}
                >
                    <Typography
                        // don't export too many atributes if they related only for this component
                        variant="h2"
                        sx={{ maxWidth: '320px' }}
                        textAlign={{ xs: 'center', md: 'left' }} >
                        The Future of
                        <Box component="div" sx={{ color: 'secondary.main' }}>AI Trading</Box>
                    </Typography>
                    <Typography variant="subtitle1" display={{ xs: 'none', md: 'block' }}>
                        Emerging Trends and Technologies
                    </Typography>
                </Stack>
                <WebinarCard >
                    <WebinarCardMedia
                        // @ts-ignore
                        component="img" src="images/bull-runing.png" title="bull runing" />
                    <WebinarIconButton disableFocusRipple disableRipple color="secondary">
                        <PlayArrow sx={{ fontSize: 60, color: 'white' }} />
                    </WebinarIconButton>
                </WebinarCard>
            </Stack>
        </Container>
    )
}

export default WebinarsPost