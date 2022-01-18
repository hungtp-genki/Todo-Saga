import React, { useState } from "react";
import { colorGrey, colorRed } from "../../../../constant";
import Button from "../../../Button";
import { BsTrash } from "react-icons/bs";

function TodoItem(props: { name: string }) {
  const [showTrash, setShowTrash] = useState(false);
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
      >
        {props.name}
      </p>
      {showTrash && (
        <Button onClick={() => {}} bgColor={colorRed} textColor="white">
          <BsTrash style={{ fontSize: 24 }} />
        </Button>
      )}
    </div>
  );
}

export default TodoItem;
