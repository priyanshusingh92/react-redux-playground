import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer:{
        menubar: menuSlice
    }
});

export default store;