import { useEffect ,useState } from "react";
import { swiggyAPI_URL } from "../../constants";
import RestaurantComponent from "./restaurantComponent";
import ShimmerUI from "./shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchInput,restaurants){
  return restaurants.filter( (restaurant) => restaurant.data.name.toLowerCase().includes(searchInput.toString().toLowerCase()) )
}

const Body = () =>{

    const [allRestaturants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchInput, setSeachInput] = useState([]);
    const [errorMessage, setErrorMessage] = useState([])    
    
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

    const searchRestaurants = (searchInput,restaurants) =>{
      if(searchInput !== ""){
        const data = filterData(searchInput,restaurants)
        setFilterRestaurants(data);
        setErrorMessage("");
        if(data.length === 0)
        {
          setErrorMessage("Search data not available for "+ searchInput);
        }
      }
      else{
        const data = filterData(searchInput,restaurants)
        setFilterRestaurants(data);
        setErrorMessage("");
        if(data.length === 0)
        {
          setErrorMessage("Search data is not available");
        }
      }
    };
    
    // if restaurants data is empty then load shimmer UI

    const isOnline = useOnline();

    if(!isOnline)
    {
       return <h1>🔴 Offline, Please check your internet connection!</h1> ;
       
    }

    if(!allRestaturants) return null

    return (
      <>
          <div className="search-container">
            <input  type="text"
                    className="search-input"
                    placeholder="Search a restaurant you want..."
                    value={searchInput}
                    onChange = { (e) => {
                        setSeachInput(e.target.value);
                    }}
            />        
          <button className="search-btn"
                  onClick={ () =>{
                    //need to filter data
                    // update the state - restaurant
                    // filter data
                    setIsL(!isL);
                    searchRestaurants(searchInput,allRestaturants)
                  }}
          
          >Search            
          </button>
          </div>   

          {errorMessage && <div className="error-container" >{errorMessage}</div>}             
          {filterRestaurants.length === 0  ? (
            <ShimmerUI />
          ) : (            
            <div className="restaurant-list">        
              { filterRestaurants?.map(
                  (restaurants) => {

                    return (
                      
                      <Link to= {"/Restaurant/" + restaurants.data.id}
                        key={restaurants.data.id} 
                      >
                        <RestaurantComponent  
                        
                        //using props
                        resData = {restaurants} />
                      </Link>
                     
                          )
                  }
              )}
            </div>
          )}

      </>
    )
  }

  export default Body;