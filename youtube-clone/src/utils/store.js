import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sidebarSlice from "./sidebarSlice";
import videosSlice from "./videosSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        menubar: sidebarSlice,
        search: searchSlice,
        videos: videosSlice,
        chat: chatSlice
    }
});

export default store;