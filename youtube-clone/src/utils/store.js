import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        menubar: menuSlice,
        search: searchSlice
    }
});

export default store;