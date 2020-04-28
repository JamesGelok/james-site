import React from "react";

export default function BigText({ style, children, ...props }) {
  return (
    <p
      style={{
        position: "relative",
        width: "100",
        height: "80px",
        color: "#85c1e9",
        lineHeight: "80px",
        fontSize: "5em",
        fontWeight: "800",
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
