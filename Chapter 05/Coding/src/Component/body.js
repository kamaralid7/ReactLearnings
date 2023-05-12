import { useEffect ,useState } from "react";
import { swiggyAPI_URL } from "../../constants";
import RestaurantComponent from "./restaurantComponent";
import ShimmerUI from "./shimmer";

function filterData(searchInput,restaurants){
  return restaurants.filter( (restaurant) => restaurant.data.name.toLowerCase().includes(searchInput.toString().toLowerCase()) )
}

const Body = () =>{

    const [allRestaturants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchInput, setSeachInput] = useState([]);
    
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

    // if restaurants data is empty then load shimmer UI

    if(!allRestaturants) return null

    if(filterRestaurants.length === 0 && allRestaturants.length > 0) return <h1>No data present for search value : {searchInput}</h1>

    return (filterRestaurants.length === 0 ) ? <ShimmerUI /> : (
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
                    const data = filterData(searchInput,allRestaturants)
                    setFilterRestaurants(data)
                  }}
          
          >Search            
          </button>
          </div>      
      
          <div className="restaurant-list">        
            { filterRestaurants?.map(
                (restaurants) => {
                  console.log(restaurants.data.id)
                  return ( <RestaurantComponent 
                    key={restaurants.data.id} 
                    //using props
                    resData = {restaurants} /> )
                }
            )}
          </div>
      </>
    )
  }

  export default Body;