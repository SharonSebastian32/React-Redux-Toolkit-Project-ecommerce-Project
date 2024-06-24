import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchUsers = createAsyncThunk("cart/fetchUser", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response);
    return response.data;
});

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
    userDetails: {}
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => { 
            const itemExist = state.cartList.find(item => item.id === action.payload.id);
            if (itemExist) {
                state.cartList.forEach(item => {
                    if (item?.id === action.payload.id) {
                        item.count = 1;
                    }
                });
                return;
            }
            state.cartList.push({
                ...action.payload,
                count: 1
            });
        },
        increment: (state, action) => { 
            const productID = action.payload;
            state.cartList.forEach(item => {
                if (item?.id === productID) {
                    item.count++;
                }
            });
        },
        decrement: (state, action) => { 
            const productID = action.payload;
            state.cartList.forEach(item => {
                if (item?.id === productID) {
                    item.count--;
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                                console.log("Loading Start")

             })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                // handle fulfilled state if needed
           state.userDetails = action.payload;
                console.log("Loading  End");

                console.log("Success");
                 state.userDetails = action.pat
                
            })
            .addCase(fetchUsers.rejected, (state) => {
                console.log("Loading End");
                console.log("error");

             });
    }
});

export const { increment, decrement, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
