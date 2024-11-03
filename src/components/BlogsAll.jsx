import React from 'react'
import { Box, Stack, Container, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { styled } from "@mui/material/styles"

const BlogsAll = ({data}) => {

    const BoxBlogsAll =styled(Box)({
    padding: '80px 0', 
    background:'url("/images/ai-news-background.png")',
})

const CardBlogsAll =styled(Card)(({theme})=>({
    maxWidth: '100%', 
    maxHeight:'236px', 
    display: 'flex' ,
    border:'1px,solid #fff',
    [theme.breakpoints.down('sm')]:{
        flexDirection: 'column',
        maxWidth: '450px',
        margin: 'auto',
        maxHeight: '820px'
    }
}))

const CardMediaBlogsAll =styled(CardMedia)(({theme})=>({
    backgroundSize: '415px 234px;',
    backgroundPosition: 'center',
    minWidth: '280px',
    height: '234px',
    [theme.breakpoints.down('sm')]:{
        backgroundSize:'450px 254px',
        minWidth: '200px',
        height: '254px'
    }
}))

const CardContentBlogsAll =styled(CardMedia)(({theme})=>({
    padding: '15px',
    paddingBottom: '15px !important'
}))

const TitleTypographyBlogsAll =styled(Typography)({
fontWeight:'600',
paddingBottom:'15px'
})

const ContentTypographyBlogsAll =styled(Typography)({
    overflow:'hidden', 
    maxHeight:'155px'
    })

  return (
    <BoxBlogsAll component='article' >
    <Container maxWidth="md">
        <Stack gap='122px'>
            {data.map((item, index) => (
                <CardBlogsAll key={index} >
                    <CardMediaBlogsAll
                        component='div'
                        sx={{
                         backgroundImage: `url(${item.image})`
                        }}
                        title={item.name}
                    />
                    <CardContentBlogsAll>                               
                        <TitleTypographyBlogsAll color='secondary' >{item.title}</TitleTypographyBlogsAll>
                        <ContentTypographyBlogsAll >{item.content}</ContentTypographyBlogsAll>
                    </CardContentBlogsAll>
                </CardBlogsAll>
            ))}

        </Stack>
    </Container>
</BoxBlogsAll>
  )
}

export default BlogsAll
