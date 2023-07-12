import {useParams} from "react-router-dom"; 
import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Restaurant = () => {

    const params = useParams();

    const {resId} = params;

    const restaurants = useRestaurant(resId);

    const restaurant = restaurants.restaurant;
    const menuItems = restaurants.menuItems;  
    
    const dispatch = useDispatch()
    const addFoodItem = (item) =>{ 
        dispatch(addItem(item));
    }

    return(
        <>
            <div className="restaurant-menu shadow-sm  ">
                <h1 className="text-3xl p-3 m-3 ">{restaurant.name}</h1>
                <img className="p-3 m-3 shadow-lg rounded-lg" src={  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                        restaurant.cloudinaryImageId} ></img>
                
            </div>
            <h2 className=" text-2xl p-4 ">{restaurant.costForTwoMessage}</h2>

            <div className="menu p-2 text-lg ">
                <h3> {menuItems?.length > 0 ? "Menu - " + menuItems?.length  + " items" : ""}</h3>
                <ul>
                    {menuItems?.map( items => (
                        <li key={items?.card?.info?.id}> 
                            <div className=" hover:shadow p-2 m-2">
                            <h2 className="text-lg ">{items?.card?.info?.name} 
                                <button className="p-1 m-1 bg-fuchsia-400 "
                                    onClick={ () => {
                                        addFoodItem(items)
                                    }}> Add Item
                                </button> 
                            </h2>

                            <div className="flex justify-between  ">
                            <div className="p-2 m-2  w-1/2">
                            <h3 className=" text-base  p-2 m-2   text-bold ">{items?.card?.info?.category}</h3>
                            <h3 className=" text-sm p-2 m-2   ">{items?.card?.info?.description}</h3>
                            </div>
                            
                            <h3 className=" text-lg text-bold p-2 m-2">{ "₹ " + items?.card?.info?.price/100}</h3>
                            <img className="h-28 p-2 m-2 shadow-md rounded-md  " src={
                                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                                items?.card?.info?.imageId
                            } ></img>
                            </div>
                            </div>
                        </li>) )}
                </ul>
            </div>
        </>
        
    )
}

export default Restaurant;