import { styled } from "@mui/material/styles"
import { Box, Typography, Card, CardMedia, CardContent, CardActions, IconButton } from "@mui/material"



// LatestAi Start
export const LatestAiBox = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(15)} 0`,
    background: 'url("images/ai-news-background.png")',
    backgroundSize: '1100px 633px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundColor: theme.palette.primary.dark
}))
// LatestAi End

//  LatestTrading Start
export const LatestTradingBox = styled(Box)(({ theme }) => ({
    padding: `${theme.spacing(15)} 0`,
    backgroundColor: theme.palette.primary.main
}))
export const LatestTradingTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    textAlign: 'center'
}))
//  LatestTrading End

// LatestBlogs Start
export const LatestBlogsTypographyTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(4),
    textAlign: 'left',
    // when I want to use the dynamic expressions as a key, I need to wrap it in square brackets [].down() is a method
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
    },
}))

export const LatestBlogsCard = styled(Card)(({ theme }) => ({
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: 'scale(1.03)'
    }
}))

export const LatestBlogsCardMedia = styled(CardMedia)({
    height: '254px'
})

export const LatestBlogsCardContent = styled(CardContent)(({ theme }) => ({
    minHeight: '116px',
    [theme.breakpoints.down('md')]: {
        minHeight: '64px'
    }
}))

export const LatestBlogsCardActions = styled(CardActions)({
    padding: '8px 16px 16px'
})

export const LatestBlogsTypographyButton = styled(Typography)({
    textTransform: 'capitalize'
})

export const LatestBlogsPagination = styled('div')(({ theme }) => ({
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
// LatestBlogs End


// NextWebinar Start
export const NextWebinarCard = styled(Card)(({ theme }) => ({
    border: 'none',
    maxWidth: '385px',
    boxShadow: 'none',
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    justifyContent: 'space-around',
    position: 'relative',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
        marginTop: '25px'
    }
}))

export const NextWebinarCardMedia = styled(CardMedia)({
    width: '100%',
    maxWidth: '385px',
    height:'164px',
    backgroundSize:'cover',
    cursor:'pointer',
    position:'relative'
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

