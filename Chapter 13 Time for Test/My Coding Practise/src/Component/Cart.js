import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector( store =>  store.cart.items
        )
    
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return(
        <>
            <div className=" ">
                <h1 className="text-2xl text-bold p-2 m-2 shadow">Cart </h1>
                <div className="flex justify-around ">
                    <h3 className=" text-md p-2 m-2 text-purple-500">{cartItems?.length ? cartItems?.length + " Item's in the Cart" : "Cart is Empty"} </h3>
                    <button className=" bg-green-200 rounded-md  border-white 
                       border-2 hover:border-green-500 border-solid  p-2 m-4 
                    " 
                    onClick={handleClearCart}>Clear Cart</button>
                </div>
                <div className="flex flex-wrap  p-2 m-2 justify-center ">
                    { cartItems?.map( foodItems =>
                        
                        (
                            <FoodItem foodData = {foodItems?.card} ></FoodItem>
                        )    
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart;