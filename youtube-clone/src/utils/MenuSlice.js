import { createSlice } from "@reduxjs/toolkit";

const menuSlice  = createSlice({
    name: "menu",
    initialState: {
        showSidebar: true
    },
    reducers:{
        toggleSidebar: (state) => {
            state.showSidebar =!state.showSidebar;
        },
        closeSidebar: (state) => {
            state.showSidebar = false;
        }
    }
})
export const {toggleSidebar,closeSidebar} = menuSlice.actions;
export default menuSlice.reducer;