import { Button, Card, Typography, } from "@mui/material";
import { BlogCardMedia, BlogCardContent, BlogCardActions, BlogButtonTypography } from "../styles/HomePageStyled"
import AiNews from "../pages/Home/AiNews";


const SinglePost = AiNews.map((post, index) => (

    <Card key={index} variant="outlined" sx={{
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            // I dont need hover for mobile
            transform: { xs: 'none', md: 'scale(1.03)' }
        },
    }}>
        <BlogCardMedia
            image={post.image}
            title={post.title}
        />
        <BlogCardContent >
            <Typography variant="subtitle1" >{post.content}</Typography>
        </BlogCardContent>
        <BlogCardActions >
            <Button size="medium" color="secondary" variant="outlined">
                <BlogButtonTypography variant="button" color="secondary" >Read More</BlogButtonTypography>
            </Button>
        </BlogCardActions>
    </ Card>
))

export default SinglePost