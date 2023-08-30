## Namaste React Course by Akshay Saini
# Chapter 07 - Finding the Path


## Q: What are various ways to `add images` into our App? Explain with `code examples`.
A: Using the `full URL of the image` for the web (CDN) or any public images.
Example : 
```html
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```
Adding the image into the project 
`Drag your image into your project` and `import it` into the desired component
```jsx
import reactLogo from "./reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```
The correct way to structure images in your project is to add them in an `images` folder. If you are using other `assets` than just images, you might want to add all in the `assets` folders. 
```jsx
import reactLogo from "../../assets/images/reactLogo.png";
export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```


## Q: What would happen if we do `console.log(useState())`?
A: If we do `console.log(useState())`, we get an array `[undefined, function]`  where first item in an array is `state` is `undefined` and the second item in an array is `setState` `function` is bound dispatchSetState.


## Q: How will `useEffect` behave if we `don't add` a `dependency array`?
A: Syntax of `useEffect` is:
```jsx
useEffect(() => {}, []);
```
Case 1 : When the `dependency array is not included` in the arguments of `useEffect() hook`, the callback function will be executed `every time` the component is rendered and re-rendered.
```jsx
useEffect(() => {
	console.log("I run everytime this component rerenders")
});
```
Case 2 : When the `dependency array is empty` in the arguments of `useEffect() hook`, the callback function will be executed `only one time` during the initial render of the component.
```jsx
useEffect(() => {
	console.log("I Only run once (When the component gets mounted)")
}, []);
```
Case 3 :  When the `dependency array contains a condition`,  the callback function will be executed  `one time` during the initial render of the component and also rerender if there is a `change in the condition`.
```jsx
useEffect(() => {
	console.log("I run every-time when my condition changed")
}, [condition]);
```


## Q: What is `SPA`?
A: `Single Page Application (SPA)` is a web application that dynamically updates the webpage with data from web server without reloading/refreshing the entire page. All the HTML, CSS, JS are retrieved in the initial load and other data/resources can be loaded dynamically whenever required. An SPA is sometimes referred to as a `single-page interface (SPI)`.


## Q: What is the difference between `Client Side Routing` and `Server Side Routing`?
A: In `Server-side routing or rendering (SSR)`, every change in URL, http request is made to server to fetch the webpage, and replace the current webpage with the older one. 

In `Client-side routing or rendering (CSR)`, during the first load, the webapp is loaded from server to client, after which whenever there is a change in URL, the router library navigates the user to the new page without sending any request to backend. All `Single Page Applications uses client-side routing`. 


## Q: How do you create `Nested Routes` react-router-dom configuration?
A: We can create a `Nested Routes` inside a react router configuration as follows:
first call createBrowserRouter for routing different pages
```jsx
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```
Now we can create a nested routing for `/path` using `children` again as follows:

```jsx
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```
Place the `<Outlet / >` as below
```jsx
const AppRestaurant = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>    
  )
  
}
```
Render RouterProvider and use router as props and pass value appRouter

```jsx
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root

// passing react element inside root
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
```
import ReactDOM                          
```jsx
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
```


## Q: Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
A: `createHashRouter` is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the `hash (#)` portion of the URL to manage the "application URL".
Other than that, it is functionally the same as `createBrowserRouter`.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-hash-router)

`createMemoryRouter` Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
For more reference [Read more](https://reactrouter.com/en/main/routers/create-memory-router)

