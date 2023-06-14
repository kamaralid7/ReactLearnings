import {useParams} from "react-router-dom"; 
import { useEffect, useState } from "react";
const Restaurant = () => {

    const params = useParams();
    const [restaurant, setRestaurant] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    const {resId} = params;

    useEffect( () => {
        getRestaurantInfo()
    }, []);
    
    async function getRestaurantInfo(){
        var API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&submitAction=ENTER";
        var API_URL_new = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6297811&lng=73.7997094&restaurantId=545713&submitAction=ENTER"
        const data = await fetch(API_URL_new);
        const jsonData = await data.json();
        setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);
        setMenuItems(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return(
        <>
            <div className="restaurant-menu">
                <h1>Restaurant Id: {resId}</h1>
                <h2>Name</h2>
            </div>
            <div className="menu">
                <ul>
                    {menuItems?.map( items => (<li key={items?.card?.info?.id}> {items?.card?.info?.name}</li>) )}
                </ul>
            </div>
        </>
        
    )
}

export default Restaurant;