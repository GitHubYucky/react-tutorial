// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/CounterSlice'
import dataReducer from './features/data/dataSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,  // これでcounterReducerが使えます
    data: dataReducer
  },
});

export default store;
