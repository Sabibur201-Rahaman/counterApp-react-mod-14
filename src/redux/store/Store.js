import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/counter/CounterSlice'
export default configureStore({
    reducer:{
        counter:counterReducer
    }
})