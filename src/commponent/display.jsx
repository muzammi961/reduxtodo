import {addtodo,deletetodo} from "../createslice"
import { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
function Display(){
let [task,useTask]=useState(" ")
let {todo}=useSelector((state)=>state.data)


let dispatch=useDispatch()
let addfunc=()=>{
    if(task.trim()){
    dispatch(addtodo(task))
    useTask('')
    }
}

    return(<>

    <h1>to do list</h1>
    <input type="text" value={task} onChange={(e)=>useTask(e.target.value)} placeholder="enter the new task..." />
    <button onClick={addfunc}>add</button>


    {todo.map((d)=>(
        <>
        <h1>{d.text}</h1>
        <button onClick={()=>dispatch(deletetodo(d.id))}>delete</button>
        {/* <button onClick={()=>dispatch()}>update</button> */}
        </>
    ))}

    </>)
}

export default Display;