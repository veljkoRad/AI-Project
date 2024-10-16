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
  * First Implemetation of `map()` for my header pages
    #### 08.10.2024
  * Added responsive sx styling
  * Added Drawer so that I have responsive menu with toggle button
  * Added TextField

### 2. Home page

#### 09.10.2024

* Redesign of Header based by appleAI-Blog
* Created folder structure: **documentation**, **home**, **components**.
* Created `Home.js` and `Banner.js`
* **Banner.jsx**
  * Customized default Font sizes, so and responsive sizes inside createTheme.Checked fontSize of all pages and define it in createTheme
  * Added bacground component
  * Added container component
  * Banner moved to components so I can use it for other pages
  * Component atributes will stay inline while styled components should be for styling only

### 10.10.2024

* **AiNews.jsx**
    * Added Box component with padding as a top element
    * Added Card, CardMedia, CardActions , to define my Blog post
    * Defined Card style in createTheme
    * Displayed 3 cards using map()
    * moved singlePostData to data folder as single file for better structure.
    * Instaled Swiper for mobile/tablet responsive.
    * Added Carousel and pagination dots ,Explanation in SwiperJS.md.
    *Changed names of styled components to be realted to component that are located in.

### 11.10.2024

* **WebinarsPost.jsx**
  * Added two articles:left-text,right-video
  * Defined WebinarVideo Outside JSX
  * Reponsive design
  * Changed all padding values in rem so it would look better because of proportions
    
### 12.10.2024
* **GitHub**
  * Installed local git repository for this project
  * Installed remote git for this project
  * Added new ssh key for my laptop
* **documentation**
  * removed MaterialUI.md as separate file
  * moved React.md in documentation so I can update it same as project
  * created GitHubInstructions.md
### 13.10.2024
* **styled components**
  * Added styled components in newsAI for: section box, section title,everything except Swiper and SwiperSlide..
  * Added textfield style in createTheme
      * Instead of prop slots defined it with class in createTheme
  *Added also atributes in styled component.
  ### 14.10.2024
  * **Code Structure**
    * Understood that styled component is HOF
    * Finished styled component
    * Use my first props to pass to child component (WebinarsPost.jsx)
    * Moved all styled components to ```HomePageStyled.jsx```
    * In AiNews.jsx changed code so that I define Card component only once for mobile and desktop
    * Updated ```README.md``` with more detailed process
### 15.10.2024.
* **Fixing Errors**
  * In console I got some errors like 
    * h2 cannot be child of parent h2
    * removed atributes from card that are not exist (focused)
  * In VS code I removed some problems like:
    * instead of styled from @emotion I used styled from matetial/styles
* **Animation**
  * Added scale on hover for:LogoIcon, NavBarListItem, AiNews Single post
* **Fixed NewsSection**
  * Added in home.js Container section from MaterialUI  so that I can put AiNews and Webinars in separate sections.
  * With this I fixed problem with position of AiNewsPagination.
  * Also better code structure to put this two in separate components 
### 16.10.2024.
* **Footer.jsx**
    * Added footer
    * added **PagedStyled.jsx** so I can add styles for components that repeats(LogoIcon in navbar and footer)
* **TradingNews.jsx**
  * Creating component so that I can use same component as AiNews.jsx inside of it
  * Renamed all components that has AINews in to Blog(BlogCardAction...)
