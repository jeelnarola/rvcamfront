import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import API from "../API";

export const feSubject = createAsyncThunk(
    "feSubject",
    async (token, thunkAPI) => {
      try {
        const response = await axios.get(`${API.fixAPI}/api/subject/show`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("feSubject",response);
        
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
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
const subjectSlice = createSlice({
    name :'subject',
    initialState,
     extraReducers:(builder)=>{
            builder.addCase(feSubject.pending,(state,action)=>{
                state.isLoading = true
                state.data = action.payload
            })
            builder.addCase(feSubject.fulfilled,(state,action)=>{
                state.isLoading = false
                state.data = action.payload
                state.isDone = true
            })
            builder.addCase(feSubject.rejected,(state,action)=>{
                state.isError = action.payload
            })
        },  
})

export default subjectSlice.reducer;