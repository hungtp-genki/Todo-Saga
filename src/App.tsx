import React from "react";

import "./App.css";

import Box from "./component/Box";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";
import TodoNumber from "./component/TodoNumber";

function App() {
  return (
    <div className="App">
      <Box>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
        <TodoNumber />
      </Box>
    </div>
  );
}

export default App;
