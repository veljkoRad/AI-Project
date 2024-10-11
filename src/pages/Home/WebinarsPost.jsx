import { Stack, Typography, Box, Card, CardMedia, IconButton } from "@mui/material"
import { PlayArrow } from "@mui/icons-material"


const WebinarsPost = () => {
    // Video Component
    const WebinarVideo = () => (
        <Card
            component='article'
            sx={{
                border: 'none',
                maxWidth: '100%',
                flexGrow: 2,
                backgroundColor: 'primary.dark',
                display: 'flex',
                justifyContent: 'space-around',
                position: 'relative',
                marginTop: { xs: '25px', md: 0 }
            }}>
            <CardMedia
                component="img"
                sx={{ width: '100%', maxWidth: '385px' }}
                image="images/bull-runing.png"
                alt="bull runing"
            />
            <IconButton
                disableFocusRipple
                disableRipple
                color="secondary"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'secondary.main',
                    '&:hover': {
                        backgroundColor: 'secondary.main',
                        opacity: 0.9
                    },
                }}
            >
                <PlayArrow sx={{ fontSize: 60, color: 'white' }} />
            </IconButton>
        </Card>
    )

    return (
        <Box component="section">
            <Typography
                variant="body2"
                color="secondary"
                textAlign={{ xs: 'center', md: 'left' }}
                sx={{
                    margin: {
                        xs: '5rem 0 1.5rem',
                        md: '2.5rem 0 3.5rem'
                    }
                }}>
                Join our next Webinar
            </Typography>
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
                        <Typography variant="h2" color="secondary">AI Trading</Typography>
                    </Typography>
                    <Typography variant="subtitle1" display={{ xs: 'none', md: 'block' }}>
                        Emerging Trends and Technologies
                    </Typography>
                </Stack>
                <WebinarVideo />
            </Stack>
        </Box >
    )
}

export default WebinarsPost