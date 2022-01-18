import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { colorPurple } from "../../constant";
import Button from "../Button";
import { addTodo } from "../../redux/todo_slice";
import { useAppDispatch } from "../../redux/hooks";
function AddTodo() {
  const [todoName, setTodoName] = useState<string>("");
  const dispatch = useAppDispatch();
  const onAddTodo = () => {
    if (todoName) {
      dispatch(addTodo({ name: todoName }));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
      }}
    >
      <input
        style={{
          flex: "1",
          height: 50,
          display: "flex",
          boxSizing: "border-box",
          padding: "1em",
        }}
        placeholder="Add your new todo"
        onChange={(event) => setTodoName(event.target.value)}
        value={todoName}
      />
      <div style={{ width: 10 }}></div>
      <Button onClick={onAddTodo} bgColor={colorPurple} textColor="white">
        <AiOutlinePlus style={{ fontWeight: "600", fontSize: 24 }} />
      </Button>
    </div>
  );
}

export default AddTodo;
