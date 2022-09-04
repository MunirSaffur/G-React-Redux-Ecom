import React from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {
    sortingHandler
  } from '../../features/items/itemsSlice';

export default function Sorters() {
    const dispatch = useDispatch();
    const sorters = ["Price low to high", "Price High to low", "New to old", "Old to new"]

    return (
        <div>
            <p>Sorting</p>
            <div className="select-sort">
                <Form>
                    {sorters.map((sorter, index) => (
                        <Form.Check
                            key={index}
                            name="sorter"
                            label={sorter}
                            type="radio"
                            onClick={() => { dispatch(sortingHandler(sorter)) }}
                        />
                    ))}
                </Form>
            </div>
        </div>
    )
}
