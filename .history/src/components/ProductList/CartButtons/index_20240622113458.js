import React from 'react'

const  CartButtons = () => {
    return (
    
 
        {cartCount > 0 ? <AfterCart /> : <BeforeCart products={products} /> }


   )
}

export default CartButtons