import {createSlice} from "@reduxjs/toolkit"

let useslice=createSlice({
    name:'todo',
    initialState:{todo:[]},
    reducers:{
        addtodo:(state,action)=>{
            state.todo.push({id:Date.now(),text:action.payload})
        },
        deletetodo:(state,action)=>{
            state.todo=state.todo.filter((e)=>e.id !== action.payload)
        }
    }
})

export const {addtodo,deletetodo}= useslice.actions
export default useslice.reducer