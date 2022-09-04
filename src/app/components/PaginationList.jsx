import React, { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch } from 'react-redux';
import {
    INCR_paginate,
    DEC_paginate,
  } from '../../features/items/itemsSlice';

export default function PaginationList() {
    const dispatch = useDispatch();
    
    return (
        <div>
            <Pagination>
            <Pagination.Item onClick={()=>{dispatch(INCR_paginate())}}>+</Pagination.Item>
            <Pagination.Item onClick={()=>{dispatch(DEC_paginate())}}>-</Pagination.Item>
            </Pagination>
        </div>
    )
}
