import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:[],
    reducers:{
        addSearch:(state,action)=>{
            state.push(action.payload)
        },
        clearSearch:(state)=>{
            state.length = 0
        }
    }
})


export const {addSearch, clearSearch} = searchSlice.actions

export default searchSlice.reducer