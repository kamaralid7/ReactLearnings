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
            <span>
            <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
                <h4>{lastMileTravelString}</h4>
                <h4>{costForTwoString}</h4>
            </span>
        </div>
    )            
}

export default RestaurantComponent;