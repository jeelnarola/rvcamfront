import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../API";

export const PatchAPI = createAsyncThunk(
    "PatchAPI",
    async (credentialsWithToken, thunkAPI) => {
        const { token, URL,...credentials } = credentialsWithToken;
     
      try {
        const response = await axios.patch(`${API.fixAPI}${URL}`, credentials,{
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

const patchSlice = createSlice({
    name :'patch',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(PatchAPI.pending,(state,action)=>{
            state.isLoading = true
            state.data = action.payload
        })
        builder.addCase(PatchAPI.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
            state.isDone = true
        })
        builder.addCase(PatchAPI.rejected,(state,action)=>{
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

export default patchSlice.reducer;