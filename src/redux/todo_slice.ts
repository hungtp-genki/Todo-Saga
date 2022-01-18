import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: { name: string }[];
}

const initialState: TodoState = {
  todos: [
    { name: "Todo 1" },
    { name: "Todo 2" },
    { name: "Todo 3" },
    { name: "Todo 4" },
    { name: "Todo 5" },
    { name: "Todo 6" },
    { name: "Todo 7" },
    { name: "Todo 8" },
    { name: "Todo 9" },
    { name: "Todo 10" },
    { name: "Todo 11" },
    { name: "Todo 12" },
    { name: "Todo 13" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ name: string }>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action: PayloadAction<{ name: string }>) => {
      state.todos = [
        ...state.todos.filter((t) => t.name !== action.payload.name),
      ];
    },
    removeAllTodo: (state, action) => {
      state.todos = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo, removeAllTodo } = todoSlice.actions;

export default todoSlice.reducer;
