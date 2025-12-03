import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInSuccess:(state, action) => {
            state.currentUser = action.payload;
            state.isAuth = true;
            state.loading = false;
            state.error = false
        },
        updateUser: (state, action) => {
            state.currentUser = action.payload;
        },
        signOutSuccess:(state, action) => {
            state.currentUser = null,
            state.isAuth = false;
        }
    }
});

export const {signInSuccess, signOutSuccess, updateUser} = userSlice.actions;
export default userSlice.reducer;