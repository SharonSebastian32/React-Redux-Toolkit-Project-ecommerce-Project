import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';


const CartButtons = ({ products }) => {

    
    const { cartList } = useSelector((state) => state.cart);



    
     console.log(cartCount, "==cartCount==");


    return (
        <>
            {cartCount > 0 ? (<AfterCart products={products} cartCount={cartCount}  />) :( <BeforeCart products={products} />)}
             
        </>
    )
    
    
    
         


   
};

export default CartButtons