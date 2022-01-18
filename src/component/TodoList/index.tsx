import React from "react";
import TodoItem from "./component/TodoItem";
function TodoList() {
  const todos: { name: string }[] = [
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
  ];
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        width: "100%",
        overflow: "auto",
        overflowX: "hidden",
        margin: "1em 0",
        boxSizing: "border-box",
      }}
    >
      {todos.map((t) => (
        <TodoItem name={t.name} />
      ))}
    </div>
  );
}

export default TodoList;
