<style>h1 {color:#6BBF59;} strong {color:#ff1d58;} html { scroll-behavior: smooth;} </style>

## Index

[CLI](#cli)

[Folder Structure](#folder-structure)

[Components](#components)

[React Rendering](#react-rendering)

[Material UI](#material-ui)


<div style="height:300px"></div>

# CLI

* **Command Line Interface tools**  is a text interface where you type commands in a terminal  to interact with your computer. 
* When developing React applications, you'll often use CLI tools to:
    * Create new projects quickly
    * Manage the libraries and tools your project uses.
    * Run your project locally for testing and development.
    * Build your project for production (making it ready for users).
## NodeJS
* I'm using NodeJS as my CLI tool:
    * ``` node -v ``` - to check if I have installed and also what version of it.
    * **npx**
        * Node Package Executor -```create-react-app`` without globally installing anything. Always gets the latest version.
    * **npm** 
        * Node Package Manager is for installing packages that are part of react.
        * Managing and runing scripts (from package.json scripts)
# Folder Structure
[go to top](#index)

## 1. node modules
* Same as modules in JS ES6 modules are files that we import in to our app/
* When we type in terminal npm start we are starting start script from node modules 
## 2. Public Folder
* Has Static files.
* Static files does not change (until I edit code). 
* ```root``` div is active and dynamic but index.html alone does not change his form. 
* ```manifest.json``` - Optional but usually kept for app metadata
## 3. Src folder  
* Here is my app code
* Essential are ``` index.js``` and ``` app.js``` , rest I can remove 
* ```App.test.js``` and ```setupTest.js``` is for testing my app.
* ```reportWebVitals.js```
    *  This file is for measuring the performance of your app.
    * If I delete it I should also remove it from **index.js**.
* ```Index.js```
    * Best location for holding **Material-UI** styles, above **rectDom.render**
* ```App.js``` - delete it, if I will use material UI
* ``` index.css```-keep it, minimal global css(body font, backgrounbd color...).
## 4. Rest Files
* ```package-lock.json ```
    *  This file is automatically generated when you install packages with npm (Node Package Manager). It locks the exact version of each dependency.
    * It ensures that everyone working on the project has the same versions of the dependencies installed
    * **Remove dependencie**: delete dependencie that I want from parkacge.js, than in consloe type npm install. After that package-lock.json will remove that dependencie also.
* ```package.json```
    * To manage and define your project’s dependencies and scripts.
* ```gitignore``` 
    * Is used to specify which files and directories Git should ignore and not track in version control.
    * node_modules is ignored fo example
## **Project Structure**
* Create only folders that I use in my project

        ```
        my-react-app/
        │
        ├── public/                     # Public assets
        │   ├── index.html              # Main HTML file
        │   ├── favicon.ico             # Favicon
        │   └── assets/                 # Static assets like images, fonts, etc.
        │
        ├── src/                        # Source files
        │   ├── components/             # Reusable components
        │   │  ├── Header.js
        │   │  ├── Footer.js
        │   │  └── ... (other shared components:button...)
        │   │
        │   ├── pages/                  # Page components (for routing)
        │   │    └── Home/
        │   │    │   ├── Home.js
        │   │    │    ├── Hero.js
        │   │    │    ├── Features.js
        │   │    │    └── Footer.js
        │   │    └── About/
        │   │
        │   ├── hooks/                  # Custom hooks
        │   ├── context/                # React Context for state management
        │   ├── services/               # API services and utility functions
        │   ├── styles/                 # Global styles and CSS files
        │   ├── utils/                  # Utility functions and helpers
        │   ├── assets/                 # Images, fonts, and other assets
        │   ├── documentation/          # Instruciton,tips, help...
        │   ├── App.js                  # Main App component
        │   ├── index.js                # Entry point of the application
        │   └── ...                     # Other files like tests or setup
        │
        ├── .gitignore                  # Files to ignore in Git
        ├── package.json                # Project metadata and dependencies
        └── README.md                   # Project documentation
        ```
# Components
[go to top](#index)

* Is a reusable piece of UI in a React app. 
* t's a function or a class that returns a piece of the user interface, typically in the form of JSX (JavaScript XML).
* Name of component always start with Capital letter

    ## 1. Functional Components
    * Since class components are old method of usign components,we use functional components
    * 
    ```
    const MyComponent = () => {
    return (
        <div>
            Hello, World!
        </div>;
    )
    };
    ```
    ## 2. JSX
    * Javascript XML is a syntax extension for JavaScript that is commonly used with React to describe the UI. 
    * It allows developers to write HTML-like code directly within JavaScript, making it easier to create and visualize the structure of components. 
        ### 1. **Basic Syntax**:
         ```
         const element = (
             <h1>
                 Hello, World!
             </h1>
             );
         ```
        ### 2. Embedding Expressions:
         * **Expressions** is any valid unit of code that resolves to a value ('Hello', true , 5 + 3, pozdra ()...)

         ```
         const name = "Alice";
         const element = <h1>Hello, {name}!</h1>;
         ```
        ### 3. Attributes
         * You can use attributes in JSX similar to HTML. However, you must use camelCase for certain attributes.

         * ```const element = <img src="{imgUrl}" className="my-image"/>;```


        ### 4.Children
         * Than we use parentheses
         ```
         const element = (
             <div>
                 <h1>Title</h1>
                 <p>This is a paragraph.</p>
             </div>
             );
         ```
        ### 5. Inline Styles
         ```const element = <div style={{ color: 'blue', fontSize: '20px' }}>Hello!</div>;```

        ### 6. Conditional Rendering
            ```
            const isLoggedIn = true;
            const element = (
            <div>
                {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
            </div>
            );
            ```

        ### 7. Comments
            ```
            const element = (
            <div>
                {/* This is a comment */}
                <h1>Hello!</h1>
            </div>
            );
            ```
        ### 8. Nesting Components
            ```
            <Card>
                <Avatar />
            </Card>
            ```
    ## 3. Props vs States
    
    ### Props
     * properties are read-only data passed from a parent component to a child component.
     * read-only means that child cannot alter that prop.

        ```
        const Greeting = ({ name }) => {
        return <h1>Hello, {name}!</h1>; // 'name' is a prop
        };

        const App = () => {
        return <Greeting name="Alice" />; // Passing 'name' as a prop
        };
        ```
    ### States
     * Unlike props, state is mutable. You can change the state within a component using the useState hook (in functional components).
     * We use state for managing data
     * State is like a  snapshot from a camera.It's a picture of our app at any given time

        ```    
        function likes= () => {
            const[likes, setLikes]=useState(0)
            const handleClick=() =>{
            setLikes(likes + 1); 
            };

            return (
            <button onClick={handleClick}>
            Likes: {likes}
            </button>
            );
        }
        ```

# React Rendering
[go to top](#index)

* How  does React take all my code  and make it display in browser? This is called Rendering
* Understanding these steps helps optimize React applications, especially when deciding where to use state or effects to avoid unnecessary re-renders or overloading the commit phase.

##  Rendering steps

### 1. Triggering  
   * When React detects that something has changed and needs to re-render
   * State is updated (exp **useState** ) 
### 2. Rednering
* Is when index.js renders entire react component tree in to the root element inside of index.html
* Is when React starts building VDOM
* VDOM - React is just calculating what the UI should look like.
*  It calculates the differences between the old and new virtual DOM trees (it's called   **reconciliation**).
   * No changes are made to the real DOM at this point.
### 3. Commiting 
   * The VDOM changes are applied to the real DOM.
   * React calls **lifecycle methods** like ```componentDidMount``` 
   * React calls effects from useEffect (for functional components).
## Lifecycle Components
 ### 1. Mounting
 * When a component is first rendered, you can perform side effects using useEffect by passing an empty dependency array []. This code runs once after the initial render.
    ```
    useEffect(() => {
        console.log('Component mounted');
        // Fetch data or set up subscriptions here
    }, []);
    ```
 ### 2. Updating 
 * When a component re-renders due to changes in state or props, you can specify dependencies in the array. *
    ```
    const [count, setCount] = useState(0);
    useEffect(() => {
    console.log(`Count updated: ${count}`);
    // Perform actions that depend on 'count'

    }, [count]); // Runs when 'count' changes

    ```
 ### 3. Unmouting 
 * Return a cleanup function from useEffect to handle any necessary cleanup before the component unmounts or when the effect re-runs
    ```
     useEffect(() => {
       console.log('Setting up...');

       return () => {
         console.log('Cleaning up...');
         // Clean up subscriptions or timers here
       };
     }, []); // Runs on mount and unmount
    ```

## Keys

When I want to render array using `map()` I need to add **key** to every item from array.

```
const items = ['Apple', 'Banana', 'Cherry'];

const ItemList = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

## Event Handlers

* ```<button onClick={handleClick}>``` correct
* ```<button onClick={handleClick()}>``` incorrect
* ``` <button onClick={() => alert('...')}>``` correct
* ```<button onClick={alert('...')}>``` incorrect