<style>h1 {color:#6BBF59;} strong {color:#ff1d58;} html { scroll-behavior: smooth;} </style>

## Index

[Instalation](#Instalation)

[Creating Default vaules](#creating-default-vaules)

[Material UI Component](#material-ui-component)



<div style="height:300px"></div>


* for Component styling I'm using Material UI 

# Instalation: 
[go to top](#index)

* ```npm install @mui/material @emotion/react @emotion/styled```
* @emotion - for writing css in JS.
    * I don't use it for now
*  @emotion/styled 
* Packages Added to ```package.json``` (in dependecies) and in ```package-lock.json```
* Downloaded to node_modules under @mui and @emotion.
# Creating Default vaules
[go to top](#index)

### Ading Custom Syling
1. Add link to ```index.html``` for montserat
2. In ```index.js``` need to import ```createTheme``` .
    * The createTheme function is used to create a custom theme object for your Material UI application.
    * I define ```const theme```  where I set Montserat.

3. In ```index.js``` need to import  ```ThemeProvider```.
        * By wrapping your component tree with ThemeProvider, you allow every Material UI component in your app to access the defined theme.
        * Put parent element ThemeProvider with atribute theme and put inside ```<App />``` component .
4. In ```index.js```  import ```CssBaseline``` and put to be first child,right abouve app component.
    * Including CssBaseline at the beginning of your component tree ensures that these base styles are applied before your components render
### Typography
1. fontFamily:-In ```createTheme``` i add  ```typography: {fontFamily: 'Montserrat, sans-serif'}```
2. fontSize-In ```createTheme``` i add  ``` h1: {fontSize: '64px',fontWeight: 700 }```
### Color & BackgroundColor
1. In ```createTheme``` i add ```pallete: {text:{ primary: {#fff}}``` 
    * This will set text color #fff as default
2. In ```createTheme``` i add ```pallete: {background:{ main: {#000}}``` 
    * This will set background color #000 as default
### Breakpoints
```
  breakpoints: {
    values: {
      xs: 0, 
      sm: 600,
      md: 900, 
      lg: 1200, 
      xl: 1536, 
      custom: 1800, 
    }
  },
```
# Styled Components:
* This can effectively can help grouping and isolating related styles, avoid inline CSS, and improve reusability.
* Two types:
    1. When I don't apply nothing from theme
        ```
        const CustomSwiperSlide = styled(SwiperSlide)({
            display: 'flex'
        });
        ```
    2. When I use color or something from theme
        ```
        const Section = styled(Box)(({ theme }) => ({
            backgroundColor: theme.palette.primary.dark,
            [theme.breakpoints.down('md')]: {
               textAlign : 'center',
            },
        }));
        ```
    3.  Instead of root: use that children component element
        ```
        MuiInputBase: {
            styleOverrides: {
                input: ({ theme }) => ({
                height: '21px',
                padding: '5px 15px',
                fontSize: '13px',
                '&::placeholder': {
                    color: theme.palette.secondary.main,  // Ensure theme is accessed correctly
                    fontSize: '13px',
                    fontWeight: 500,
                }})
            },
        },
        ```
    4.   To add atributes in styled components,with or without sx
    ```
    const MyTextField=styled((props)=>(
    <TextField
      variant="outlined"
      color='secondary'
      {...props}
      size='small'
      placeholder="Search"
      focused
      hiddenLabel      
    /> 
    ))({})   
    ```

# Material UI Component
[go to top](#index)

### AppBar
* What happens when I add AppBar  in my code?
    * I get component with style  ```css-1v2t6sx-MuiPaper-root-MuiAppBar-root``` and there I can see which styles are applied.
    * I got some background color, display:flex,column..
* Changin style of AppBar component.
    * I do this using createTheme
### Drawer
* Atributers:
    * anchor- from where my menu pops
    * Open - default vaule ,is it visible or not before clicking
    * onClose - when we close it,after click or whatever event I choose.
    * PaperProps- it's an element inside drawer which I can't see in code that's why I define it's props inside Drawer.I define background color of drawer here
    * SliderProps - if I want to change animation
### TextField 
* Atributes
    * focused - borders shows always
    * hiddenLabel - turn off label animation
    * slotProps  
        * Not only for TextField , but this option let you style child component .
        * better than slotprops is to use createTheme, or styled component.

## 4. Responsive 
```<Typograhpy sx={{display:{sm:'none'}}}>Responsive</Typograhpy>```
 * Breakpoints
    * xs: 0px
    * sm: 600px
    * md: 900px
    * lg: 1200px
    * xl: 1536px
## 5. Materail Icons
 * ```npm install @mui/icons-material```
 * ```import MenuIcon from '@mui/icons-material/Menu';```
## 6. ```useMediaQuery``` is React hook from materialUI.
* Down is max width that size and up is min width
## 7. Material UI Docs
* ***children - node***
    * What I can nest inside opening and closing tag of that component
    * Node-  can be: "Hi", 123, ReactElement(```<div>Some JSX</div>)```)
    ,null/undefined/boolean
* **classes - object**
    ```
    <Button classes={{ root: 'my-custom-button-root', label: 'my-custom-button-label' }}>
    My Button
    </Button>
    ```
    * In Css
        ```
        .my-custom-button-root {
            background-color: blue;
            border-radius: 10px;
        }
        ```
* **CSS Classes**
    * .MuiCardContent-root - I define this in theme

* **component - elementType**
    ```
    <CardContent component="section">
    This content will now be inside a <section> instead of a <div>.
    </CardContent>
    ```