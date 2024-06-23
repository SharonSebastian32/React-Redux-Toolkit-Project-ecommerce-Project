 import React from 'react'
 import './CartButtons.css'
import { useDispatch } from 'react-redux';
import {addToCart} from '../../../Redux/cart'

 export const BeforeCart = ({p}) => {
     const dispatch = useDispatch();

   return (
       <div className='before-cart'>
           <button className='add-cart-buttton'onClick={()=>dispatch(addToCart())}>Add to Cart</button>
        </div>
      
   )
 }
  