import React from "react";
import { colorPurple } from "../../constant";
import Button from "../Button";
import { removeAllTodo } from "../../redux/todo_slice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

function TodoNumber() {
  const numberOfTodos = useAppSelector((state) => state.todo.todos.length);
  const dispatch = useAppDispatch();
  const onClearAllTodo = () => {
    dispatch(removeAllTodo());
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        height: 40,
        boxSizing: "border-box",
      }}
    >
      <p
        style={{ display: "flex", flex: "1", padding: "0 1em" }}
      >{`You have ${numberOfTodos} pending task${
        numberOfTodos >= 2 ? "s" : ""
      }`}</p>
      <Button
        onClick={onClearAllTodo}
        width={100}
        bgColor={colorPurple}
        textColor="white"
      >
        <span style={{ fontSize: 16, fontWeight: "600" }}>Clear all</span>
      </Button>
      <div style={{ width: 10, height: "100%" }}></div>
    </div>
  );
}

export default TodoNumber;
