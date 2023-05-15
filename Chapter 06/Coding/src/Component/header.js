import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FireFoodLogo from "../Images/FoodFireLogo.png";
import { Link } from "react-router-dom";



const Logo = () =>{


    // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);

  const navigate = useNavigate();
    return (
      <div className="appLogo">      
        <a href="/">
          <img src={FireFoodLogo} className="logo" alt = "Fire Food Logo"></img>
        </a>      
      </div>
    )
  }
  
  const Header = () =>{
    return (
      <div className="app-header">
        <Logo></Logo>
        <div className="nav-items">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to="/About">About Us</Link></li>
                <li>Shopping</li>

            </ul>
        </div>
      </div>
    )
  }

  export default Header;