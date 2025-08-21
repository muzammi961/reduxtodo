import {configureStore} from "@reduxjs/toolkit"
import todoReducer  from "./createslice"
let store=configureStore({
    reducer:{
        data:todoReducer   
    }
})
export default store