import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import {
  deployData,
  paramsData,
  deployFilters
} from '../../features/items/itemsSlice';
import ItemList from '../components/ItemList';
import FilterSide from '../components/FilterSide';
import Header from '../components/Header';
import Cart from '../components/Cart';


export default function HomePage() {
  const dispatch = useDispatch();
  const params = useSelector(paramsData);

  // fetch data
  useEffect(() => {
    axios.get('http://localhost:3000/items', {params: params} ).then(res => {
      dispatch(deployData(res.data))
    }).catch(err=>console.log(err));
  }, [params])

   // fetch filters
   useEffect(() => {
    axios.get('http://localhost:3000/items' ).then(res => {
      dispatch(deployFilters({
        brands: res.data.map(filter=> filter.manufacturer),
        tags: res.data.map(filter=> filter.tags),
        pagination: res.data.length
      }))
    }).catch(err=>console.log(err));
  }, [])


  return (
    <>
    <Header/>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-3'><FilterSide /></div>
        <div className='col-12 col-md-6'><ItemList/></div>
        <div className='col-12 col-md-3'><Cart/></div>
      </div>
    </div>
    </>
  )
}
