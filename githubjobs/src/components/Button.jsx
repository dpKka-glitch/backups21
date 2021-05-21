import React from "react";
import "../styles/btn.scss";

export default function Button(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: props.width,
        height: props.height,
        backgroundColor: props.primary ? "#f13bca" : "whitesmoke",
        color: props.primary ? "whitesmoke" : "black",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <div>{props.name}</div>
    </div>
  );
}
