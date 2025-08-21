import { addtodo, deletetodo, updatetodo } from "../createslice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Display() {
  let [task, setTask] = useState("");
  let [editId, setEditId] = useState(null); 
  let { todo } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  let addfunc = () => {
    if (task.trim()) {
      if (editId) {
        dispatch(updatetodo({ id: editId, newText: task }));
        setEditId(null);
      } else {
        dispatch(addtodo(task));
      }
      setTask("");
    }
  };

  let handleEdit = (item) => {
    setTask(item.text);   
    setEditId(item.id);   
};

  return (
    <>
      <h1>To Do List</h1>

      <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}  placeholder="enter what do you want to do today  " />
      <button onClick={addfunc}>Add </button>

      {todo.map((d) => (
        <div key={d.id}>
          <h3>{d.text}</h3>
          <button onClick={() => handleEdit(d)}>Edit</button>
          <button onClick={() => dispatch(deletetodo(d.id))}>Delete</button>
        </div>
      ))}
    </>
  );
}
export default Display;
