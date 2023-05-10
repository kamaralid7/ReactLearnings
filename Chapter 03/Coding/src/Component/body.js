import { useEffect ,useState } from "react";
import { swiggyAPI_URL } from "../../constants";
import RestaurantComponent from "./restaurantComponent";

const Body = () =>{

    const [allRestaturantsa, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    
    useEffect( () => {
        const restaurantsData =  getRestaurants();
        
    },[])
    async function getRestaurants(){
        const data = await fetch(swiggyAPI_URL);
        const jsonData = await data.json();
        setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
        return;
    }



    return (
      <div className="restaurant-list">        
        { filterRestaurants?.map(
            (restaurants) => {
              console.log(restaurants.data.id)
              return ( <RestaurantComponent 
                key="restaurants.data.id" 
                {...restaurants.data}  /> )
            }
        )}
      </div>
    )
  }

  export default Body;