import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sidebarSlice from "./sidebarSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
    reducer:{
        menubar: sidebarSlice,
        search: searchSlice,
        videos: videosSlice
    }
});

export default store;