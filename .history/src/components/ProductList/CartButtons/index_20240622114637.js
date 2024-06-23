import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';

const CartButtons = ({ productID }) => {
      const { cartCount, cartList} = useSelector((state) => state.cart);

    
    console.log(productID, "==productID==");
    return (
        <>
            {" "}
            <AfterCart/> <BeforeCart/>
        </>
    )
    
    
    
         


   
};

export default CartButtons