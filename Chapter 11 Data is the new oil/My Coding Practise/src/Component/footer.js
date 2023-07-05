import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () =>{

  const {user} = useContext(UserContext);

    return (
      <div className="app-footer">
        
        <> <h4 className="text-md text-bold p-10">This site is developed by {user.name} - {user.email}</h4>             </>              
      </div>    
    )        
  }

  export default Footer;