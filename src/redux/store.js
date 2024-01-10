import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import todoReducer from "./todoSlice"
import loginReducer from "./loginSlice"
export const store = configureStore({
    
    reducer:{
        counter: counterReducer,
        todos: todoReducer,
        isAuthorized:loginReducer
    },
})