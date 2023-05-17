import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import Header from "./src/Component/header";
import Body from "./src/Component/body";
import Footer from "./src/Component/footer";
import About from "./src/Component/About";
import Contact from "./src/Component/Contact";
import Error from "./src/Component/Error";
import Restaurant from "./src/Component/restaurant";

//import  ReactDOM  from "react-dom/client";


// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React





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
    ]
  },
  
])
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root

// passing react element inside root
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter

