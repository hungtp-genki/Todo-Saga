import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uniqBy } from "lodash";
interface TodoState {
  todos: { name: string }[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ name: string }>) => {
      state.todos = uniqBy([...state.todos, action.payload], "name");
    },
    removeTodo: (state, action: PayloadAction<{ name: string }>) => {
      state.todos = [
        ...state.todos.filter((t) => t.name !== action.payload.name),
      ];
    },
    removeAllTodo: (state) => {
      state.todos = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, removeAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
