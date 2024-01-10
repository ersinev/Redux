import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuthorized: false
}


const loginSlice = createSlice({
    name: 'isAuthorized',
    initialState,
    reducers: {
        checkLogin: (state, action) => {
            if (action.payload === "ersin") {
              state.isAuthorized = true
            }

        }
    }
})

export const { checkLogin } = loginSlice.actions

export default loginSlice.reducer