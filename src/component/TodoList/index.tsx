import React from "react";
import TodoItem from "./component/TodoItem";
import { useAppSelector } from "./../../redux/hooks";
function TodoList() {
  const todos: { name: string }[] = useAppSelector((state) => state.todo.todos);
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
