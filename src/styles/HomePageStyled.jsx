import { styled } from "@mui/material/styles"
import { Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material"



// AiNews.jsx Start
export const NewsSection = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(20)} 0`,
    background: 'url("images/ai-news-background.png")',
    backgroundSize: '1100px 633px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundColor: theme.palette.primary.light
}))

export const NewsSectionTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textAlign: 'left',
    // when I want to use the dynamic expressions as a key, I need to wrap it in square brackets [].down() is a method
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
    marginBottom: theme.spacing(6)
}))

export const BlogCardMedia = styled(CardMedia)({
    height: '183px'
})

export const BlogCardContent = styled(CardContent)(({ theme }) => ({
    minHeight: '116px',
    [theme.breakpoints.down('md')]: {
        minHeight: '64px'
    }
}))

export const BlogCardActions = styled(CardActions)({
    padding: '8px 16px 16px'
})

export const BlogButtonTypography = styled(Typography)({
    textTransform: 'capitalize'
})

export const BlogPagination = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '-7% !important',
    left: '50% !important',
    transform: 'translateX(-50%)',
    zIndex: 999,
    // @ts-ignore
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'flex'
    }
}))
// AiNews.jsx End


// WebinarPost.jsx Start
export const WebinarCard = styled(Card)(({ theme }) => ({
    border: 'none',
    maxWidth: '100%',
    flexGrow: 2,
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
        marginTop: '25px'
    }
}))

export const WebinarCardMedia = styled(CardMedia)({
    width: '100%',
    maxWidth: '385px'
})

export const WebinarIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.9
    },
}))
// WebinarPost.jsx End