import { configureStore } from "@reduxjs/toolkit";
import appReducer from './appSlice';
import searchReducer from './searchSlice'
import chatReducer from './chatSlice'

const appStore = configureStore({
  reducer: {
    app: appReducer,
    search:searchReducer,
    chat:chatReducer
  },
});

export default appStore;
