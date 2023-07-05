import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantComponent = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        area,
        lastMileTravelString,
        costForTwoString,
        avgRating,    
    } = resData?.data;

    const {user} = useContext(UserContext)

    return(
        <div className="restaurant-card w-56 
        p-2 m-5 shadow-lg cursor-pointer rounded-md hover: scale-105 
        bg-pink-100 ">
            <img    src={
                        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                        cloudinaryImageId
                }
            />
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{area}</h4>
            <span className=" ">
                <span className="flex items-center text-sm font-medium text-white w-12    ">
                    <svg className="w-6 h-6  text-yellow-300 bg-green-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg> 
                    <span className=" bg-green-700   h-6 text-center text-xs pt-1 pl-2 pr-2 font-light">{avgRating}</span>
                    
                </span>
                <span className="flex items-center">
                <h4 className=" text-sm text-orange-600">{lastMileTravelString}, </h4>
                <h4 className=" text-sm ">{costForTwoString}</h4>
                </span>
            </span>
            <h4 className="text-bold text-sm">{user.name}</h4>
            <h4 className="text-bold text-sm">{user.email}</h4>
        </div>
    )            
}

export default RestaurantComponent;