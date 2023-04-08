import { createSlice } from "@reduxjs/toolkit";

const chatSlice  = createSlice({
    name: "chat",
    initialState: {
      messages:[]
    },
    reducers:{
        setComments: (state,action) => {
            if(state.messages.length ===20){
                state.messages.shift();
            }
            state.messages.push(action.payload);
        }
    }
})
export const {setComments} = chatSlice.actions;
export default chatSlice.reducer;