import { createSlice } from "@reduxjs/toolkit";
export const CounterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        setCustom:(state,action)=>{
            state.value=action.payload
        }
    }
})
 export const{increment,decrement,setCustom}=CounterSlice.actions
 export default CounterSlice.reducer
 