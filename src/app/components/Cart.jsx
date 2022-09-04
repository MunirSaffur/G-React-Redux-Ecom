import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    rebuildCart,
    cartItemsData,
    cartTotal
} from '../../features/cart/cartSlice';
import { useToast } from '@chakra-ui/react'

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(cartItemsData);
    const total = useSelector(cartTotal);
    const toast = useToast()

    const IncItem = (clickedItem) => {
        if (cartItems.some(item => item.name === clickedItem.name)) {
            const newCartItems = cartItems.map(el => el.name === clickedItem.name ? {
                name: clickedItem.name,
                price: el.price + clickedItem.price / el.quantity,
                quantity: el.quantity + 1
            } : el)
            dispatch(rebuildCart(newCartItems))
        }
    }

    const DecItem = (clickedItem) => {
        if (clickedItem.quantity >= 2) {
            if (cartItems.some(item => item.name === clickedItem.name)) {
                const newCartItems = cartItems.map(el => el.name === clickedItem.name ? {
                    name: clickedItem.name,
                    price: el.price - clickedItem.price / el.quantity,
                    quantity: el.quantity - 1
                } : el)
                dispatch(rebuildCart(newCartItems))
            }
        } else {
            const newCartItems = cartItems.filter(item => item.name !== clickedItem.name)
            dispatch(rebuildCart(newCartItems))
            toast({
                description: "Item removed from cart!",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }

    }

    return (
        <div className='sticky-top'>
            {cartItems.length >= 1 ?
                <div className='cart-section'>
                    {cartItems.map((item, index) => (
                        <div className='cart-item' key={index}>
                            <div>
                                <p className='m-0'>{item.name}</p>
                                <span className='item-price'>
                                    {(item.price).toLocaleString('tr-TR', {
                                        style: 'currency',
                                        currency: 'TRY',
                                        minimumFractionDigits: 2,
                                    })}
                                </span>
                            </div>
                            <div className="item-counter">
                                <button className='btn' onClick={() => { IncItem(item) }}>+</button>
                                <span>{item.quantity}</span>
                                <button className='btn' onClick={() => { DecItem(item) }}>-</button>
                            </div>
                        </div>
                    ))}
                    <div className='text-end'><p className='d-inline-block m-0 mt-2 total-cart'>
                        {(total).toLocaleString('tr-TR', {
                            style: 'currency',
                            currency: 'TRY',
                            minimumFractionDigits: 2,
                        })}
                    </p></div>
                </div> :
                <p></p>
            }
        </div>
    )
}
