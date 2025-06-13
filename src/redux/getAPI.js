import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../API";

export const GetAPI = createAsyncThunk("GetAPI",
    async (credentialsWithToken, thunkAPI) => {
        const { token, URL, ...credentials } = credentialsWithToken;

        try {
            const response = await axios.get(`${API.fixAPI}${URL}`, credentials, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },params: {
                    role: 'Student' // <-- This adds ?role=faculty to the URL
                }
            });
            console.log("responseStudent : - ", response);

            return response;
        } catch (error) {
            console.error("Error during login:", error.response.data);
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }

    
)

const initialState = {
    isLoading:false,
    data:null,
    isError:false,
    isDone:false
}

const gettSlice = createSlice({
    name :'post',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(GetAPI.pending,(state,action)=>{
            state.isLoading = true
            state.data = action.payload
        })
        builder.addCase(GetAPI.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
            state.isDone = true
        })
        builder.addCase(GetAPI.rejected,(state,action)=>{
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

export default gettSlice.reducer;