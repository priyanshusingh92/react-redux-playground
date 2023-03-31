import { createSlice } from "@reduxjs/toolkit";

const MenuSlice  = createSlice({
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
export const {toggleSidebar} = MenuSlice.actions;
export default MenuSlice.reducer;