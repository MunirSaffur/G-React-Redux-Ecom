import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { typeFilter } from '../../features/items/itemsSlice';

export default function TypeFilter() {
    const dispatch = useDispatch();
    const [active, setActive] = useState({
        shirt: true,
        mug: false
    })
    const typeFilterHandler = (type) => {
        dispatch(typeFilter(type))
        type === "shirt" ?
            setActive({
                shirt: true,
                mug: false
            })
            :
            setActive({
                shirt: false,
                mug: true
            })
    }

    return (
        <div className='type-filter'>
            <button className={'btn ' + (active.shirt ? "active" : "")} onClick={() => { typeFilterHandler("shirt") }}>shirt</button>
            <button className={'btn ' + (active.mug ? "active" : "")} onClick={() => { typeFilterHandler("mug") }}>mug</button>
        </div>
    )
}
