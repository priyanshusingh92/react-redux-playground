import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice  = createSlice({
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
export const {toggleSidebar,closeSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;