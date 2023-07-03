
import FireFoodLogo from "../Images/FoodFireLogo.png";
import { Link , useNavigate} from "react-router-dom";
import { useEffect, useState, useRef } from "react";



const Logo = () =>{
    return (
      <div className="">      
        <a href="/">
          <img src={FireFoodLogo} className="h-28 px-2 " alt = "Fire Food Logo"></img>
        </a>      
      </div>
    )
  }
  
  const Header = () =>{
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();
    return (
      <div className="flex justify-between bg-green-300 shadow-lg   ">
        <Logo></Logo>
        <div className="nav-items">
            <ul className="flex py-10   ">
                <li className="px-2"><Link to = "/">Home</Link></li>
                <li className="px-2"><Link to="/About">About Us</Link></li>
                <li className="px-2"  >Shopping</li>      
                <li className="px-2" ><Link to = "/Instamart">Instamart </Link>  </li>
              { isLoading ? 
                    (
                      <button className="logout-btn px-2" onClick={ () => setIsLoading(!isLoading)}>Log Out</button>
                    ) : 
                    (
                      <button className="login-btn px-2" onClick={ () => setIsLoading(!isLoading)}>Log In</button>
                    )
              }
            </ul>
        </div>
      </div>
    )
  }

  export default Header;