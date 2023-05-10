import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./src/Component/header";
import Body from "./src/Component/body";
import Footer from "./src/Component/footer";

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
      <Body />
      <Footer />
    </React.Fragment>    
  )
  
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<AppRestaurant/>);
