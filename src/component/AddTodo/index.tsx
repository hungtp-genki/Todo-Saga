import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { colorPurple } from "../../constant";
import Button from "../Button";
function AddTodo() {
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
      />
      <div style={{ width: 10 }}></div>
      <Button onClick={() => {}} bgColor={colorPurple} textColor="white">
        <AiOutlinePlus style={{ fontWeight: "600", fontSize: 24 }} />
      </Button>
    </div>
  );
}

export default AddTodo;
