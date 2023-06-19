import {useParams} from "react-router-dom"; 
import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurants";
const Restaurant = () => {

    const params = useParams();

    const {resId} = params;

    const restaurants = useRestaurant(resId);

    const restaurant = restaurants.restaurant;
    const menuItems = restaurants.menuItems;    

    return(
        <>
            <div className="restaurant-menu">
                <h1>{restaurant.name}</h1>
                <h2>{restaurant.costForTwoMessage}</h2>
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