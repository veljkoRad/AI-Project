<style>h1 {color:#6BBF59;} strong {color:#ff1d58;} html { scroll-behavior: smooth;} </style>

# Next.js
* Next.js is a React framework.
* Moving to Next,js because of SEO, I need good SEO for Blog site, plus it has router, and more things.

## Installation and instructions

* **Migrating**: 
    * index.html,and index.js => src>pages>_app.jsx  
    * App.js => src>pages>index.jsx 
    * Home.jsx => src>pages>home>index.jsx

* ```npm install next@latest react@latest react-dom@latest```
    * I got node modules, package.json, package-lock.json
    * In package.json I can see that I have 3 dependencies: react,react dom and next
* Ading scripts to package.json
    ```
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
    ```
    * ```npm run dev``` is same as ```npm start``` in react
* Folder structure
    * **.next** folder recreates everytime I run npm run dev. It's okay to delete this whole folder because I clear cache and free up space
    * adding  **public**(images) and **src** 
    * inside of src I will have **pages**, **data**, **styles**, **components**...

    * In pages I must have **index.jsx** and it can't be in subfolder
    * added .gitignore so that my project doesn't add node modules all the time it takes much time.
* **pages/_app.js** 
    * is optional but If I want to include Head,  material UI , css, and others I will need this.
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

## Features

### 1. Routing
* In **src** folder I create folder **pages**
* In that new folder  I create index.jsx which is my main page.
* From here I add folders as other routes(about>index.jsx)
* Import Link from next
    * This Link is for redirecting to  other routes which I create.
* Import useRouter, so I can modify active page
     ```
     const router=useRouter();
    className={router.pathname === page.href ? 'menuActive' : 'menuDefault'}
    ```
#### Dynamic Route
* **Creating dynamic Route** 
    * create folder **single** in that folder add file ```[id].jsx```
    * In that folder I import useRouter and says
        ```
        const router = useRouter();
        const { id } = router.query;
        ```
    * Now I can see this page ```localhost:3000/single/1```
* **Conecting it with my blogs**
    * On button post I put Link from Next.js like this: ```<Link href={`/single/{index}`}>```
* **Fetch data**
    * Added news prop to BlogsNews **newsType='ai-news' || 'trading-news'
    * Passed that prop to Link:
    ```
    <Link
        href={{
            pathname: `/single/${index}`,
            query: { newsType }
        }}>
    ```
    * In single page added use Effect so It would catch data on every change(change is click on that single blog) 
    * In useEffect I choose with newsType what data to pick than from chosen data I pick that Single data (foundSingle)

    

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

