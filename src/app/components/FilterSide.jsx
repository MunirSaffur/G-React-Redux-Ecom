import React, { useEffect, useState } from 'react'
import SelectFilter from './SelectFilter'
import Sorters from './Sorters';
import { useSelector } from 'react-redux';
import {filtersData} from '../../features/items/itemsSlice';


export default function FilterSide() {

  const {brands ,tags } = useSelector(filtersData);

  return (
    <div className='sticky-top'>
      <Sorters/>
      <SelectFilter filterData={brands} title={"Brands"}/>
      <SelectFilter filterData={Array.prototype.concat.apply([], tags)} title={"Tags"}/>
    </div>
  )
}
