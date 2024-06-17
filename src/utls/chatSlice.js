import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice=createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
            addmessage:(state, action)=>{
                state.messages.splice(LIVE_CHAT_COUNT,1);
                state.messages.push(action.payload)
            }
    }
})

export const {addmessage}=chatSlice.actions;
export default chatSlice.reducer;