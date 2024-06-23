import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";




const fetchUsers = createAsyncThunk("cart/fetchUser", async() => {
    const response = await axios.get("'https://fakestoreapi.com/products");
    return response;

})


    const INITIAL_STATE = {
    cartList: [],
        cartCount: 0,
    userDetails:{}
};







const cartSlice = createSlice({
        name: 'cart',
        initialState: INITIAL_STATE,
        reducers: {
            addToCart: (state, action) => { 
              const itemExist =   state.cartList.find((item) => item.id === action.payload.id
                );
                if (itemExist) {
                     
                   state.cartList.forEach(item => {
                    if(item?.id ===  action.payload.id)
                    {
                        item.count=1;
                     }
                   })
                    return
                }
                 
                    state.cartList.push(
                        {
                            ...action.payload,
                            count:1,

                        }
                    )
                
              
            },
            increment: (state, action) => { 

                const productID = action.payload;

                state.cartList.forEach(item => {
                    if(item?.id === productID)
                    {
                        item.count++;
                     }
                       })
             },
            decrement: (state, action) => { 
                 
                
               const productID = action.payload;

                state.cartList.forEach(item => {
                    if(item?.id === productID)
                    {
                        item.count--;
                     }
                       })
            },
         
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            
         },
        [fetchUsers.fulfilled]: (state, action) => { 
            
        },
        [fetchUsers. rejected]: (state,action) => { },
        
        }
    
})
export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
