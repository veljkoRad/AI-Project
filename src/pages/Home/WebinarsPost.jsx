import { Stack, Typography, Box, Card, CardMedia, IconButton } from "@mui/material"
import { PlayArrow } from "@mui/icons-material"
import { WebinarCard, WebinarCardMedia, WebinarIconButton } from "../../styles/HomePageStyled"


const WebinarsPost = ({ WebinarSectionTitle }) => {


    return (
        <Box component="section">
            <WebinarSectionTitle
                variant="body2"
                sx={{
                    margin: {
                        xs: '5rem 0 1.5rem',
                        md: '2.5rem 0 3.5rem'
                    }
                }}>
                Join our next Webinar
            </WebinarSectionTitle>
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
                <WebinarCard component='article' >
                    <WebinarCardMedia component="img" image="images/bull-runing.png" alt="bull runing" />
                    <WebinarIconButton disableFocusRipple disableRipple color="secondary">
                        <PlayArrow sx={{ fontSize: 60, color: 'white' }} />
                    </WebinarIconButton>
                </WebinarCard>
            </Stack>
        </Box >
    )
}

export default WebinarsPost