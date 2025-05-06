import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../API";

export const PostAPI = createAsyncThunk(
    "PostAPI",
    async (credentialsWithToken, thunkAPI) => {
        const { token, URL,...credentials } = credentialsWithToken;
     
      try {
        const response = await axios.post(`${API.fixAPI}${URL}`, credentials,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("response",response);
        
        return response;
    } catch (error) {
        console.error("Error during login:", error.response.data);
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  );
const initialState = {
    isLoading:false,
    data:null,
    isError:false,
    isDone:false
}

const postSlice = createSlice({
    name :'post',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(PostAPI.pending,(state,action)=>{
            state.isLoading = true
            state.data = action.payload
        })
        builder.addCase(PostAPI.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
            state.isDone = true
        })
        builder.addCase(PostAPI.rejected,(state,action)=>{
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

export default postSlice.reducer;