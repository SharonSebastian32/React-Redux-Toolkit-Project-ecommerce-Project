import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';



const CartButtons = ({ products }) => {
    const { cartList } = useSelector((state) => state.cart);
    
    const cartCount = cartList.find((item))
    
    console.log(cartCount, "==productID==");
    return (
        <>
            {" "}
            <AfterCart product={products}  /> <BeforeCart products={products}/>
        </>
    )
    
    
    
         


   
};

export default CartButtons