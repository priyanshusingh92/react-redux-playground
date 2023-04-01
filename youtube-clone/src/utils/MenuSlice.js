import { createSlice } from "@reduxjs/toolkit";

const menuSlice  = createSlice({
    name: "menu",
    initialState: {
        showSidebar: true
    },
    reducers:{
        toggleSidebar: (state) => {
            state.showSidebar =!state.showSidebar;
        }
    }
})
export const {toggleSidebar} = menuSlice.actions;
export default menuSlice.reducer;