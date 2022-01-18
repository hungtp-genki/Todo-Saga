import React from "react";
function Button(props: {
  bgColor?: string;
  textColor?: string;
  onClick: () => void;
  children: any;
  width?: number;
  height?: number;
  margin?: string;
}) {
  return (
    <button
      style={{
        backgroundColor: props.bgColor ?? "white",
        color: props.textColor ?? "black",
        border: "none",
        borderRadius: 3,
        padding: 5,
        width: props.width ?? 53,
        height: props.height ?? 50,
        margin: props.margin ?? 0,
      }}
    >
      {props.children}
    </button>
  );
}
export default Button;
