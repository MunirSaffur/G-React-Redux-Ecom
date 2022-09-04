import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  rebuildCart,
  cartItemsData
} from '../../features/cart/cartSlice';


export default function Item({ itemData }) {
  const dispatch = useDispatch();
  var cartItems = useSelector(cartItemsData)

  const addItemToCart = () => {
    if (cartItems.some(item => item.name === itemData.name)) {

      const newCartItems = cartItems.map(el => el.name === itemData.name ? {
        name: itemData.name,
        price: el.price + itemData.price,
        quantity: el.quantity + 1
      } : el)
      dispatch(rebuildCart(newCartItems))
    }
    else {
      dispatch(addToCart(itemData))
    }
  }

  return (
    <div className='col-6 col-md-3 item-card'>
      <div className='item-image'><img className='w-100 h-100' /></div>
      <span className='item-price'>
        {(itemData.price).toLocaleString('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
      })}
      </span>
      <p className='item-name'>{itemData.name}</p>
      <button className='item-addtocard' onClick={() => { addItemToCart() }}>Add</button>
    </div>
  )
}
