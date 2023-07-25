# Redux
Redux store is big object which has different sections which are small pieces.

## Slice
A Slice is a small portion of your store.

## Write
When we click on + it 
1.  dispatches and action 
2.  which calls the reducer function 
3.  which updates/modifies the slice of our store.

## Read
We use a Selector (selecting the portion of the store) to read data and this will update the card.
Selector means Subscribing to our store. it is in sync with the store.
Selector is hook and hook is a JS function at the end of the day.

# Libraries

@reduxjs/toolkit - core of redux
react-redux - bridge between react and redux

## Reducer

Do not return anything from reducer take a state and modify it.


## Steps for Reducer
Create Store.  
&emsp;-   configureStore() - @reduxjs/toolkit. 
```js
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore();
``` 

Provide my store to app  
&emsp;-   <Provider store = {store}> - import from react-redux.
```js
    import {Provider} from "react-redux";
    import store from "./src/utils/store";
    
    <Provider store= {store}>

    </Provider>
```

Slice  
&emsp;- @reduxjs/toolkit -   createSlice({  
&emsp;&emsp;&emsp;name:"",  
&emsp;&emsp;&emsp;initialState:  
&emsp;&emsp;&emsp;reducers:{  
&emsp;&emsp;&emsp;&emsp;addItem: (state,action) => { state = action.payload}  
&emsp;&emsp;&emsp;}  
&emsp;&emsp;})  
&emsp;&emsp;export const {} = cartSlice.actions;  
&emsp;&emsp;export default cartSlice.reducer; 

```js
import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    
    initialState: {
        items:[]
    },

    reducers: {
        addItem : (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items = [];
        },
    },   
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

```

Put that Slice into Store.  
&emsp;&emsp;-{  
&emsp;&emsp;&emsp;reducer: {  
&emsp;&emsp;&emsp;&emsp;cart: cartSlice,  
&emsp;&emsp;&emsp;&emsp;user: userSlice  
&emsp;&emsp;}  
&emsp;}  

```js
import { configureStore } from "@reduxjs/toolkit"
import  cartReducer  from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default store;
```

# Middleware

# Thunk

#  RTK Query