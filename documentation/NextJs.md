<style>h1 {color:#6BBF59;} strong {color:#ff1d58;} html { scroll-behavior: smooth;} </style>

# Next.js

* Next.js is a React framework that adds extra features:

## 1. Routing

## 2. Rendering Strategies: SSR, SSG

* NextJS is SEO friendly because it uses SSR, SSG

* **Rendering**  is how the computer reads the code and builds the page you see on the screen. Sometimes it builds it very quickly (**static**), and other times it has to build it piece by piece while you look at it (**dynamic**).

### Static
* **Server Side Generation**
    * HTML is generated once at build time and doesn't change unless the site is rebuilt.
    * Initial Load- Fast(pre-built HTML)
    * SEO-Better (HTML ready for search engines)
    * Server Load- Light (HTML already generated)
    * Content Updates- Requires rebuild

### Dynamic

* **Client Side Rendering**
    * Loads empty html('root') then built app in browser using predefined javascript(index.js) 
    * Initial Load- Slower(HTML built in browser)
    * SEO- Weaker(content loaded dynamically)
    * Server Load- More (server fetches data each time)
    * Content Updates- Immediately via API fetch

* **SSR** When user enters site: JavaScript is executed on the server before sending rendered HTML, leading to a faster initial display of content.

* Good for  content rich apps where SEO is important.
* WHen page loads first then we use SSG and SSR,after when we change routes pages doesn't refresh because of React using CSR

    


## 3. API Routes
* I use it to hadle requests and manage data.
* Why dont use external APi fetch directly?
    * Because when I fetch it to next API route, i can manage better , and also if conection breaks or something..
* installation
    * In my project, where pages are located, I create ```pages/api```
    * Now from here I can fetch like it's from another site( 
    ```await fetch('http://localhost:3000/api/posts');``` )

## 4. Performance Optimization 
* Faster loading times