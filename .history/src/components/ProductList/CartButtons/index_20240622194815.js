import React, { useMemo } from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';


const CartButtons = ({ products }) => {

    
    const { cartList } = useSelector((state) => state.cart);




    const cartCount = useMemo(() => {

    console.log(cartList, "==cartList");

    return cartList?.find((item) => item?.id === products.id)?.count;
     },[])



 

    return (
        <>
            {cartCount > 0 ? (<AfterCart products={products} cartCount={cartCount}  />) :( <BeforeCart products={products} />)}
             
        </>
    )
    
    
    
         


   
};

export default CartButtons