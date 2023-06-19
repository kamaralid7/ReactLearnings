import { useState, useEffect } from "react";

const useRestaurant = (resId) => {

    //Hooks are just like normal functions

    const [restaurant, setRestaurant] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect( () => {
        getRestaurantInfo()
    }, []);


    // Get data from API
    async function getRestaurantInfo(){       
        var API_URL_new = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6297811&lng=73.7997094&restaurantId="+resId+"&submitAction=ENTER"
        const data = await fetch(API_URL_new);
        const jsonData = await data.json();
        setRestaurant(jsonData?.data?.cards[0]?.card?.card?.info);        
        setMenuItems(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }



    const restaurants = {
        restaurant: restaurant,
        menuItems: menuItems
    };
    // return restaurant Data
    return restaurants;
}

export default useRestaurant;