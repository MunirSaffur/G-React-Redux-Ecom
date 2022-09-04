import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  items: [],
  params: {
    _page: 1,
    _limit: 16,
    itemType: 'shirt',
    manufacturer: [],
    tags: []
  },
  filters: {
    brands: [],
    tags: [],
  }
};

export const itemsSlice = createSlice({
  name: 'ItemsFetcher',
  initialState,

  reducers: {
    deployData: (state, action) => {
      state.items = action.payload
    },
    deployFilters: (state, action) => {
      state.filters = action.payload
    },
    INCR_paginate: (state) => {
      state.params._page += 1
    },
    DEC_paginate: (state) => {
      state.params._page >= 2 ? state.params._page -= 1 : state.params._page = state.params._page
    },
    typeFilter: (state, action) => {
      state.params.itemType = action.payload
    },
    brandFilter: (state, action) => { 
    action.payload.checked ? state.params.manufacturer.push(action.payload.name) : state.params.manufacturer = state.params.manufacturer.filter(item => item !== action.payload.name)
    },
    tagFilter: (state, action) => { 
    action.payload.checked ? state.params.tags.push(action.payload.name) : state.params.tags = state.params.tags.filter(item => item !== action.payload.name)
    },
    sortingHandler: (state, action) => { 
      action.payload === "Price low to high"?
      state.items.sort((a, b) => (a.price > b.price ? 1 : -1)):
      action.payload === "Price high to low"?
      state.items.sort((a, b) => (a.price < b.price ? 1 : -1)):
      action.payload === "New to old"?
      state.items.sort((a, b) => (a.added > b.added ? 1 : -1)):
      state.items.sort((a, b) => (a.added < b.added ? 1 : -1))
    }
  },
});

export const { deployData, deployFilters, INCR_paginate, DEC_paginate, typeFilter, brandFilter, tagFilter, sortingHandler } = itemsSlice.actions;


export const itemsData = (state) => state.ItemsFetcher.items
export const paramsData = (state) => state.ItemsFetcher.params
export const filtersData = (state) => state.ItemsFetcher.filters


export default itemsSlice.reducer;
