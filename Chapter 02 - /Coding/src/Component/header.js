import FireFoodLogo from "../Images/FoodFireLogo.png";



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
    return (
      <div className="app-header">
        <Logo></Logo>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Shopping</li>
                
            </ul>
        </div>
      </div>
    )
  }

  export default Header;