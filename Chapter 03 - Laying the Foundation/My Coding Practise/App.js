import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./src/Component/header";

//import  ReactDOM  from "react-dom/client";


// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React


const Body = () =>{
  return (
    <div className="app-body">
      <h1>App Body</h1>
    </div>
  )
}

const Footer = () =>{
  return (
    <div className="app-Footer">
      <h1>App Footer</h1>
    </div>    
  )        
}

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
