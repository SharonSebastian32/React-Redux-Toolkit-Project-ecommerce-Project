import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';



const CartButtons = ({ product }) => {
    const { cartList } = useSelector((state) => state.cart);
    
    const cartCount = cartList.find((item) => item?.id === productID);

    
    console.log(cartCount, "==productID==");
    return (
        <>
            {" "}
            <AfterCart product={product} /> <BeforeCart/>
        </>
    )
    
    
    
         


   
};

export default CartButtons