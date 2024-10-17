import React from "react";
import { Button, Card, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { BlogCardActions, BlogCardContent, BlogCardMedia, BlogButtonTypography, BlogPagination } from "../../styles/HomePageStyled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css/bundle'; //for Styling Pagination dots




const BlogNews = ({ paginationClass, newsData }) => {
  const theme = useTheme();
  //useMediaQuery is React hook from materialUI.Down is max width that size and up is min width
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // SinglePost Component, I did like this instead of defining and mapping Card two times
  const SinglePost = newsData.map((post, index) => (
    <Card
      key={index}
      variant="outlined"
      sx={{
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: { xs: "none", md: "scale(1.03)" }, // Only hover effect on desktop
        },
      }}
    >
      <BlogCardMedia image={post.image} title={post.title} />
      <BlogCardContent>
        <Typography variant="subtitle1">{post.content}</Typography>
      </BlogCardContent>
      <BlogCardActions>
        <Button size="medium" color="secondary" variant="outlined">
          <BlogButtonTypography variant="button" color="secondary">
            Read More
          </BlogButtonTypography>
        </Button>
      </BlogCardActions>
    </Card>
  ))


  return (

    <>
      {isMobile ? (
        <Swiper
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            800: { slidesPerView: 2 }
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            //With this 'el' class I can add div outside container and  it will load dots in that div.
            //Why outside cointainer?
            //Because when I set to dots bottom:-200px They are hidden.
            el: `.${paginationClass}`,
          }}
          loop={true}
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {SinglePost.map((post, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {/* for example SinglePost[0] is first card. */}
              {SinglePost[index]}

            </SwiperSlide>
          ))}

        </Swiper>
      ) : (
        <Stack direction="row" spacing={4} sx={{ justifyContent: 'space-between' }}>
          {SinglePost}
        </Stack>
      )}
      <BlogPagination className={paginationClass} />
    </>

  );
};

export default BlogNews;
