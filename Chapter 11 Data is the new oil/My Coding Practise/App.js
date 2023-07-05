import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from "./src/Component/header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/footer";
import About from "./src/Component/About";
import Contact from "./src/Component/Contact";
import Error from "./src/Component/Error";
import Restaurant from "./src/Component/Restaurant";
import Profile from "./src/Component/profile";
import ShimmerUI from "./src/Component/Shimmer";
//import Instamart from "./src/Component/Instamart";


// Chunking
// Code Splitting
// Dynamic Bunding
// Lazy Loading
// On Demand Loading
// Dynamic Import

// When we are loading our Component on Demand React suspends it!
//Upon on Demand Loading -> upon render -> suspend loading
const Instamart = lazy (  () => import ("./src/Component/Instamart") )


const AppRestaurant = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>    
  )
  
}



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppRestaurant />,
    errorElement: <Error />,
    children:[
      {
        path: "/About",
        element: <About />,
        errorElement: <Error />,
        children:[
          {
            path: "profilePage",
            element: <Profile />,
          },
        ]
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Restaurant/:resId",
        element : <Restaurant />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense fallback = { <ShimmerUI />} > 
              <Instamart /> 
          </Suspense>),
      }
    ]
  },
  
])
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root

// passing react element inside root
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter

