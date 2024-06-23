import React from 'react'
import { AfterCart } from './AfterCart';
import { BeforeCart } from './BeforeCart';
import { useSelector } from 'react-redux';



const CartButtons = ({ products }) => {
    const { cartList } = useSelector((state) => state.cart);
    
    const cartCount = cartList?.find((item) =>item?.id === products?.id).count
    
    console.log(cartCount?.count, "==cartCount==");
    return (
        <>
            {" "}
            <AfterCart products={products}  /> <BeforeCart products={products} />
        </>
    )
    
    
    
         


   
};

export default CartButtons