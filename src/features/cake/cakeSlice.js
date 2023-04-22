import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordere: (state, action) => {
            state.numOfCakes = state.numOfCakes - action.payload
        },
        restock: (state, action) => {
            state.numOfCakes = state.numOfCakes + action.payload
        }
    }
})

export default cakeSlice.reducer
export const { ordere, restock } = cakeSlice.actions