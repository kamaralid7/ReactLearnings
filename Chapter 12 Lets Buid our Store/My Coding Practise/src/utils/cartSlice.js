import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:["Banana", "Apples"]
    },
    removeItem: (state, action) => {
        state.items.pop();
    },
    reducers: {
        addItem : (state, action) =>{
            state.items.push(action.payload);
        },
        
        clearCart: (state) => {
            state.items = [];
        }
    }   
})