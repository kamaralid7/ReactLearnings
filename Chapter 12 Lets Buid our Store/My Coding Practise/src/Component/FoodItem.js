import { IMG_URL } from "../utils/constants";


const FoodItem = (props) => {
    const {foodData} = props;

    
    return(
        <>
        <div className="border-solid border-2 border-red-100 w-80 p-2 m-2
             bg-pink-50 hover:bg-pink-200 rounded-md">
            <img className="h-40 shadow-md  p-2 m-2 " src= { IMG_URL + foodData?.info?.imageId }></img>
            <h3 className=" text-xl pl-2 ml-2">{foodData?.info?.name}</h3>
            <h3 className=" text-sm pl-2 ml-2">{foodData?.info?.category}</h3>
            <h3 className=" text-base  pl-2 ml-2"> Rupees: {foodData?.info?.price / 100} </h3>
           
        </div>
        </>

    )
}

export default FoodItem;