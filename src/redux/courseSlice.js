import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import API from "../API";

export const fetchCourse = createAsyncThunk(
    "fetchCourse",
    async (token, thunkAPI) => {
      try {
        const response = await axios.get(`${API.fixAPI}/api/course/show`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("response",response);
        
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
const courseSlice = createSlice({
    name :'course',
    initialState,
     extraReducers:(builder)=>{
            builder.addCase(fetchCourse.pending,(state,action)=>{
                state.isLoading = true
                state.data = action.payload
            })
            builder.addCase(fetchCourse.fulfilled,(state,action)=>{
                state.isLoading = false
                state.data = action.payload
                state.isDone = true
            })
            builder.addCase(fetchCourse.rejected,(state,action)=>{
                state.isError = action.payload
            })
        },  
})

export default courseSlice.reducer;