
import {createSlice} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
let brtSlice = createSlice({
    name : 'brtRecharge',
    initialState : [],
    reducers : {
        addRecharge : (state,action) => {
            return state = action.payload
        }
    }
})

let brtStore = configureStore({
    reducer : {
        brt : brtSlice.reducer
    }
})


export const brtActions = brtSlice.actions
export default brtStore;