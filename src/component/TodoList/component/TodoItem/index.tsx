import React, { useState } from "react";
import { colorGrey, colorRed } from "../../../../constant";
import Button from "../../../Button";
import { BsTrash } from "react-icons/bs";
import { useAppDispatch } from "../../../../redux/hooks";
import { removeTodo } from "../../../../redux/todo_slice";

function TodoItem(props: { name: string }) {
  const [showTrash, setShowTrash] = useState(false);
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        width: "100%",
        textAlign: "left",
        height: 50,
        backgroundColor: colorGrey,
        color: "black",
        margin: "3px 0",
        flexDirection: "row",
        display: "flex",
      }}
      key={props.name}
      onClick={() => {
        setShowTrash(!showTrash);
      }}
    >
      <p
        style={{
          display: "flex",
          flex: "1",
          padding: "0 1em",
          boxSizing: "border-box",
        }}
        key={props.name}
      >
        {props.name}
      </p>
      {showTrash && (
        <Button
          onClick={() => {
            console.log("cliskc");
            dispatch(removeTodo(props));
          }}
          bgColor={colorRed}
          textColor="white"
        >
          <BsTrash style={{ fontSize: 24 }} />
        </Button>
      )}
    </div>
  );
}

export default TodoItem;
