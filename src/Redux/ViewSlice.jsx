import { createSlice } from "@reduxjs/toolkit";

export const View=createSlice({
    name:"viewstatus",
    initialState:{
        value:false
    },

    reducers:{
        toggle:(state)=>{
            state.value =!state.value;
        }
    }
})

export const {toggle}=View.actions;

export default View.reducer;