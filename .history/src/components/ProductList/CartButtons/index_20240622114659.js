import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';



const CartButtons = ({ productID }) => {
      const {cartList} = useSelector((state) => state.cart);

    
    console.log(productID, "==productID==");
    return (
        <>
            {" "}
            <AfterCart/> <BeforeCart/>
        </>
    )
    
    
    
         


   
};

export default CartButtons