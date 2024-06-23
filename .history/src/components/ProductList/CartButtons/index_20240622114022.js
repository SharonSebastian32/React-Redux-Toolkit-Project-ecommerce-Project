import React from 'react'

const  CartButtons = ({productID}) => {
    return 
    
        <>
            
            {cartCount > 0 ? <AfterCart /> : <BeforeCart products={products} /> }
        </>
    
    
    
         


   
}

export default CartButtons