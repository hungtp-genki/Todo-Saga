import React from "react";

function Box(props: { children: any }) {
  return (
    <div
      style={{
        width: "36%",
        height: "80vh",
        backgroundColor: "white",
        padding: "2em 3em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxSizing: "border-box",
        borderRadius: 8,
      }}
    >
      {props.children}
    </div>
  );
}

export default Box;
