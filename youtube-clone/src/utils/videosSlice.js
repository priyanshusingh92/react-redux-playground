import { createSlice } from "@reduxjs/toolkit";

const videosSlice  = createSlice({
    name: "menu",
    initialState: {
      videos:[]
    },
    reducers:{
        cacheVideos: (state,action) => {
          state.videos= action.payload;
        }
    }
})
export const {cacheVideos} = videosSlice.actions;
export default videosSlice.reducer;