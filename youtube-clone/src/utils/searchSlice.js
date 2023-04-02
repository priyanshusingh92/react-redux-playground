import { createSlice } from "@reduxjs/toolkit";

const searchSlice  = createSlice({
    name: "menu",
    initialState: {
      
    },
    reducers:{
        cacheResults: (state,action) => {
            Object.assign(state, action.payload)
        }
    }
})
export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;