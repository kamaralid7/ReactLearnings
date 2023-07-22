import { useEffect ,useState } from "react";
import { swiggyAPI_URL } from "../../constants";
import RestaurantComponent from "./RestaurantComponent";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchInput,restaurants){
  return restaurants.filter( (restaurant) => restaurant.data.name.toLowerCase().includes(searchInput.toString().toLowerCase()) )
}


const RestaurantList = ({filterRestaurants}) => {

  return(
    <>
      <div 
      data-testid="res-list"
      className="restaurant-list flex flex-wrap 
      justify-center items-center  
      ">        
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
    </>
  )
}

const SearchRestaurants = ({allRestaturants, setFilterRestaurants,setErrorMessage}) => {
  const [searchInput, setSeachInput] = useState([]);

  const searchRestaurants = (searchInput,restaurants) =>{
    if(searchInput !== ""){
      const data = filterData(searchInput,restaurants)
      console.log(setFilterRestaurants)
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

  return (
    <>
          <div  className="search-container m-5  justify-center items-center ">
            <input  type="text" 
                    className="search-input w-2/5 outline-none  shadow-sm border-solid border-2 border-gray-300  rounded-l   "
                    placeholder="Search a restaurant you want..."
                    value={searchInput}
                    data-testid="search-input"
                    onChange = { (e) => {
                        setSeachInput(e.target.value);
                    }}
            />        
          <button className="search-btn w-1/12  bg-orange-600 rounded-r  shadow-sm  hover:bg-green-700  "
                  data-testid = "search-btn"
                  onClick={ () =>{
                    //need to filter data
                    // update the state - restaurant
                    // filter data
                    //setIsL(!isL);
                    searchRestaurants(searchInput,allRestaturants)
                  }}
          
          >Search            
          </button>
          </div>   
    </>
  )

}

const Body = () =>{

    const [allRestaturants, setAllRestaurants] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);

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


    
    // if restaurants data is empty then load shimmer UI

    const isOnline = useOnline();

    if(!isOnline)
    {
       return <h1>🔴 Offline, Please check your internet connection!</h1> ;
       
    }

    if(!allRestaturants) return null

    return (
      <>
  

          <SearchRestaurants 
          allRestaturants = {allRestaturants} 
          setFilterRestaurants = {setFilterRestaurants}
          setErrorMessage = {setErrorMessage}
          />

          {errorMessage && <div className="error-container" >{errorMessage}</div>}             
          {filterRestaurants.length === 0  ? (
            <ShimmerUI />
          ) : (            
            <RestaurantList filterRestaurants = {filterRestaurants} setFilterRestaurants = {setFilterRestaurants} />
          )}

      </>
    )
  }

  export default Body;