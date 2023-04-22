import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    name: '',
    error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchUser = createAsyncThunk('user/fetchUsers', (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.data.name)
        .catch(error => error.message)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.name = action.payload
            state.error = ''
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.name = ''
            state.error = action.payload
        })
    }
})

export default userSlice.reducer