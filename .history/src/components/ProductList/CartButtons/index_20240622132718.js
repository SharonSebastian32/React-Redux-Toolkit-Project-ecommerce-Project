import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';



const CartButtons = ({ producta }) => {
    const { cartList } = useSelector((state) => state.cart);
    
    const cartCount = cartList.find((item) =>item?.id === productID)
    
    console.log(cartCount, "==cartCount==");
    return (
        <>
            {" "}
            <AfterCart  /> <BeforeCart />
        </>
    )
    
    
    
         


   
};

export default CartButtons