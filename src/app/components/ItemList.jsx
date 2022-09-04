import React from 'react'
import { useSelector } from 'react-redux';
import {
    itemsData
} from '../../features/items/itemsSlice';
import Item from './Item';
import PaginationList from './PaginationList';
import TypeFilter from './TypeFilter';
import ItemsSkeletons from './skeletons/ItemsSkeletons';

export default function ItemList() {
    const items = useSelector(itemsData);

    return (
        <div> 
            <p>Products</p>
            <TypeFilter />
            <div className='row p-4 bg-white'>
                {
                    items.length<1?
                    [1,2,3,4,5,6].map(skeleton => <ItemsSkeletons key={skeleton}/>)
                    :
                    items.map((item, index) => <Item key={index} itemData={item} />)
                }
            </div>
            <PaginationList/>
        </div>
    )
}
