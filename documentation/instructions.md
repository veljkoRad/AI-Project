<style>h2 {color:#6BBF59;} strong {color:#ff1d58;} html { scroll-behavior: smooth;} </style>

## Development Timeline

### 1. Initial Setup
#### 07.10.2024
* Created the project using `create-react-app`.
    * Deleted files that I don't need right now ( reportWebVitals.js,app.css, App.test.js, setupTest.js, reactIcon... )
* **MaterialUI** -Installed in react so I can start styling.
    * Aded default properties(colors, font)
    * I have document react.md with full instructions
* Created **header.jsx**
    * Added MaterialUI components (AppBar Toolbar...)
    * Used createTheme to change styles of that components
    * Added inline sx to edit styles
    * First Implemetation of ```map()``` for my header pages
        #### 08.10.2024
    * Added responsive sx styling
    * Added Drawer so that I have responsive menu with toggle button
    * Added TextField 
### 2. Home page
#### 09.10.2024
* Redesign of Header based by appleAI-Blog
* Created folder structure: **documentation**, **home**, **components**.
* Created ```Home.js``` and ```Banner.js```
* **Banner.jsx**
    * Customized default Font sizes, so and responsive sizes inside createTheme.Checked fontSize of all pages and define it in createTheme
    * Added bacground component
    * Added container component
    * Banner moved to components so I can use it for other pages
### 10.10.2024
* **AiNews.jsx**
    * Added Box component  with padding as a top element
    * Added Card, CardMedia, CardActions , to define my Blog post
    * Defined Card style in createTheme
    * Displayed 3 cards using map()
    * moved singlePostData to data folder as single file for better structure.
    *Instaled Swiper for mobile/tablet responsive.
    * Added Carousel and pagination dots ,Explanation in SwiperJS.md.
### 11.10.2024
* **WebinarsPost.jsx**
    * Added two articles:left-text,right-video
    * Defined WebinarVideo Outside JSX
    * Reponsive design
    * Changed all padding values in rem so it would look better because of proportions
    * First Git Commit

    **Plan Za Dalje**:
        * material ui animation: (onHover:Blog Post Card hover, navigation bar buttons and logo)
        * React DevTools
    