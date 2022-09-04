import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {
  brandFilter,
  tagFilter
} from '../../features/items/itemsSlice';
import SideFilterSkeletons from './skeletons/SideFilterSkeletons';

export default function SelectFilter({ filterData, title }) {
  const dispatch = useDispatch();

  const [filterString, setFilterString] = useState("")

  return (
    <div>
      <p>{title}</p>
      <div className='select-sort'>
        <Form.Control type="text" placeholder={"Search " + (title === "Brands" ? "Brand" : "Tag")} className='mb-2' onChange={(e) => { setFilterString(e.target.value) }} />
        <ul>
          {filterData.length < 1 ?
            <SideFilterSkeletons /> :
            filterData.filter(item => filterString === "" ? item : item.toLowerCase().includes(filterString.toLowerCase())).filter((item, index) => filterData.indexOf(item) == index).map((item, index) => (
              <li key={index}>
                <Form.Check
                  type="checkbox"
                  label={item.replaceAll("-", " ")}
                  onChange={(e) => { title === "Brands" ? dispatch(brandFilter({ checked: e.target.checked, el: e.target.parentNode.textContent, name: item })) : dispatch(tagFilter({ checked: e.target.checked, el: e.target.parentNode.textContent, name: item })) }}
                /></li>
            ))
          }


        </ul>
      </div>
    </div>
  )
}
