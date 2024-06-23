import { createSlice } from "@reduxjs/toolkit";
 const INITIAL_STATE = {
    cartList: [],
    cartCount: 0
};

const cartSlice = createSlice({
        name: 'cart',
        initialState: INITIAL_STATE,
        reducers: {
            addToCart: (state, action) => { 
                state.cartCount = 1;

                console.log(action)
                state.cartList.push(action)
            },
            increment: (state) => { 
                state.cartCount +=1
            },
            decrement: (state) => { 
                state.cartCount -=1
            },
         
        }
    
})
export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
