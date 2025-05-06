import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';
import API from '../API';
import { act } from 'react';
export const fetchSubject = createAsyncThunk(
    "fetchSubject",
    async (credentials, thunkAPI) => {
      try {
        const response = await axios.post(`${API.fixAPI}/api/auth/login`, credentials);
        return response;
    } catch (error) {
        console.error("Error during login:", error);
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  );
const initialState = {
    isLoading:false,
    user:null,
    isError:false,
    isDone:false
}

const authSlice = createSlice({
    name :'auth',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchSubject.pending,(state,action)=>{
            state.isLoading = true
            state.user = action.payload
        })
        builder.addCase(fetchSubject.fulfilled,(state,action)=>{
            state.isLoading = false
            state.user = action.payload
            state.isDone = true
        })
        builder.addCase(fetchSubject.rejected,(state,action)=>{
            state.isError = action.payload
        })
    },  
    reducers:{
        logout:(state)=>{
            state.user = null;
            state.isDone = false;
        }
    }
})

export const { logout } = authSlice.actions;

export default authSlice.reducer;