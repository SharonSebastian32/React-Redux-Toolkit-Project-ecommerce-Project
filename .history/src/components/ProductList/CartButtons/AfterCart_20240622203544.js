import React from 'react'
import './CartButtons.css'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../../Redux/cart';



export const AfterCart = ({cartCount, pro}) => {
 
  const dispatch = useDispatch();

  return (
      <div className='after-cart'> 
      <button className='cart-counter-button' onClick={() => dispatch(decrement())}>
        -
      </button>

      <div className="cart-count">{cartCount}</div>
      
      <button className='cart-counter-button' onClick={() => dispatch(increment())}>
        +
      </button>

    </div>
  )
}
