import { createSlice } from "@reduxjs/toolkit";

let useslice = createSlice({
  name: 'todo',
  initialState: { todo: [] },
  reducers: {
    addtodo: (state, action) => {
      state.todo.push({ id: Date.now(), text: action.payload });
    },
    deletetodo: (state, action) => {
      state.todo = state.todo.filter((e) => e.id !== action.payload);
    },
    updatetodo: (state, action) => {
      const { id, newText } = action.payload; 
      let todoItem = state.todo.find((e) => e.id === id);
      if (todoItem) {
        todoItem.text = newText;
      }
    }
  }
});

export const { addtodo, deletetodo, updatetodo } = useslice.actions;
export default useslice.reducer;
