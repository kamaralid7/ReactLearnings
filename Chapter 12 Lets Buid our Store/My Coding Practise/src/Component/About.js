import food from "../Images/burger-image.png";
import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileComponent";
import ProfileFunctionalComponent from "./profile"
import React from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component{

  constrctor(){
    console.log('Parent - Constructor')
  }

  componentDidMount(){
    console.log('Parent - ComponentDidMount');
  }

  componentDidUpdate(){
    console.log(Parent - componentDidUpdate);
  }

  componentWillUnmount(){
    console.log('Parent - componentWillUnmount')
  }

  render(){
    console.log('Parent - Render');

    return (
      <div className="about-container">
        <div className="about-left">
          <h1 className="text-3xl p-2 m-2 shadow-md bg-pink-200 ">
            Welcome to <br /> The world of <br /> <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy meal"
          </h4>
        </div>
        <UserContext.Consumer>
          { ({user}) =>  ( <> <h4 className="text-xl text-bold p-10">{user.name} - {user.email}</h4>             </>               )
          }
                
        </UserContext.Consumer>
        <div>
          <ProfileClassComponent Name="Kamarali" xyz = "Awesome"/>
        </div>
        <div>
          <ProfileFunctionalComponent />
        </div>
        <div className="profileOutlet">
          <Outlet />
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
      </div>
    );
  }

}

export default About;