
import FireFoodLogo from "../Images/FoodFireLogo.png";
import { Link , useNavigate} from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";





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
    const [isLoggedIn, setIsLoggedIn] = useState(true) ;
    const navigate = useNavigate();
    const isOnline = useOnline();  

    const {user} = useContext(UserContext);
    const cartItems = useSelector( (store) => store.cart.items)

    function toggleLogin(){
      setIsLoggedIn(!isLoggedIn)
    }
    return (
      <div className="flex justify-between bg-green-300 shadow-lg   ">
        <Logo></Logo>
        <div className="nav-items">
            <ul className="flex py-10   ">
                <li className="px-2 text-bold text-orange-600">{user.name}</li>
                <li className="px-2"><Link to = "/">Home</Link></li>
                <li className="px-2"><Link to="/About">About Us</Link></li>
                <li className="px-2"  ><Link to="/Cart">Cart - {cartItems.length}</Link></li>      
                <li className="px-2" ><Link to = "/Instamart">Instamart </Link>  </li>
                <li className="px-2"> <button className="nav--btn" onClick={() => {toggleLogin()}} > {isLoggedIn ?  "Log Out " : "Log In " }  
                  <span className={isOnline ? "text-green-600" : "text-red-600" }>●</span></button>
                </li>

            </ul>
        </div>
      </div>
    )
  }

  export default Header;