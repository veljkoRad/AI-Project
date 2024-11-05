import { styled } from "@mui/material/styles"
import { Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material"




// Ai and Trading blogs Container Start
export const NewsSection = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(20)} 0`,
    background: 'url("images/ai-news-background.png")',
    backgroundSize: '1100px 633px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundColor: theme.palette.primary.light
}))
// Ai and Trading blogs Container End

// BlogNews Start
export const BlogsNewsTypographyTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(6),
    textAlign: 'left',
    // when I want to use the dynamic expressions as a key, I need to wrap it in square brackets [].down() is a method
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
}))

export const BlogNewsCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.2s ease-in-out",
    transform: '"scale(1.03)"',
    "&:hover": {
        [theme.breakpoints.down('md')]: {
            transform: 'none'
        }
    },
}))

export const BlogNewsCardMedia = styled(CardMedia)({
    height: '183px'
})

export const BlogNewsCardContent = styled(CardContent)(({ theme }) => ({
    minHeight: '116px',
    [theme.breakpoints.down('md')]: {
        minHeight: '64px'
    }
}))

export const BlogNewsCardActions = styled(CardActions)({
    padding: '8px 16px 16px'
})

export const BlogNewsTypographyButton = styled(Typography)({
    textTransform: 'capitalize'
})

export const BlogNewsPagination = styled('div')(({ theme }) => ({
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
// BlogNews End


// WebinarPost Start
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
// WebinarPost End

// TradingNews Start
export const TradingNewsTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textAlign: 'center'
}))
// TradingNews End