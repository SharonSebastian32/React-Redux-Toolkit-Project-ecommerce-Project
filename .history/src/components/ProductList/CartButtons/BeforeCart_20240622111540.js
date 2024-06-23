 import React from 'react'
 import './CartButtons.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../Redux/cart'

 export const BeforeCart = ({products}) => {
     const dispatch = useDispatch();

   return (
       <div className='before-cart'>
           <button className='add-cart-buttton'onClick={()=>dispatch(addToCart(products))}>Add to Cart</button>
        </div>
      
   )
 }
  