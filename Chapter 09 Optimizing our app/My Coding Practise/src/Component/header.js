
import FireFoodLogo from "../Images/FoodFireLogo.png";
import { Link , useNavigate} from "react-router-dom";
import { useEffect, useState, useRef } from "react";



const Logo = () =>{
    return (
      <div className="appLogo">      
        <a href="/">
          <img src={FireFoodLogo} className="logo" alt = "Fire Food Logo"></img>
        </a>      
      </div>
    )
  }
  
  const Header = () =>{
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    return (
      <div className="app-header">
        <Logo></Logo>
        <div className="nav-items">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li className="aboutUs"><Link to="/About">About Us</Link></li>
                <li className="Shopping"  >Shopping</li>      
                <li ><Link to = "/Instamart">Instamart </Link>  </li>
              { isLoading ? 
                    (
                      <button className="logout-btn" onClick={ () => setIsLoading(!isLoading)}>Log Out</button>
                    ) : 
                    (
                      <button className="login-btn" onClick={ () => setIsLoading(!isLoading)}>Log In</button>
                    )
              }
            </ul>
        </div>
      </div>
    )
  }

  export default Header;