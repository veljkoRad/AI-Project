<style>h1 {color:#6BBF59;} strong {color:#ff1d58;} html { scroll-behavior: smooth;} </style>

# Next.js

* Next.js is a React framework that adds extra features:

### 1. Routing

### 2. Rendering Strategies: SSR, SSG

* NextJS is SEO friendly because it uses SSR, SSG

* **Rendering**  is how the computer reads the code and builds the page you see on the screen. Sometimes it builds it very quickly (**static**), and other times it has to build it piece by piece while you look at it (**dynamic**).

#### Static
* **Server Side Generation**
    * HTML is generated once at build time and doesn't change unless the site is rebuilt.
    * Initial Load- Fast(pre-built HTML)
    * SEO-Better (HTML ready for search engines)

#### Dynamic

* **Client Side Rendering**
    * From server loads basic HTML (root div) and javascript
    * Renders page in browser
    * Good for Dashboard(e.g., wpAdmin, or settings-profile)
    * Single page apps with many interactions
    * Bad for SEO
    * Slow loading

* **SSR** 
    * Renders page on server,than send that html to browser
    * Faster loading 
    * Good SEO


### 3. API Routes
* I use it to hadle requests and manage data.
* Why dont use external APi fetch directly?
    * Because when I fetch it to next API route, i can manage better , and also if conection breaks or something..
* installation
    * In my project, where pages are located, I create ```pages/api```
    * Now from here I can fetch like it's from another site( 
    ```await fetch('http://localhost:3000/api/posts');``` )

### 4. Performance Optimization 
* Faster loading times

## Installation and instructions

* ```npm install next@latest react@latest react-dom@latest```
    * I got node modules, package.json, package-lock.json
    * In package.json I can see that I have 3 dependencies: react,react dom and next
* Ading scripts to package.json
    * ```npm run dev``` is same as ```npm start``` in react
* Folder structure
    * **.next** folder recreates everytime I run npm run dev. It's okay to delete this whole folder because I clear cache and free up space
    * adding  **public** and pages **folders**
    * In pages I must have **index.jsx** and it can't be in subfolder
    * added .gitignore so that my project doesn't add node modules all the time it takes much time.
* **pages/_app.js** 
    * is optional but If I want to include material UI , css, and others I will need this.
    * When I create this file my page stop working until I add basic structure (like index.js)
        ```
        import React from 'react';

        function MyApp({ Component, pageProps }) {
        return <Component {...pageProps} />;
        }

        export default MyApp;
        ```
    * imported Head
    * Added Head abouve ```<Component>``` and give them <></> as parent
    * instaled material UI
    * imported createTheme, ThemeProvider,CssBaseline 

## next to do:
* Add head in _app.js and meta, title.