import React from "react";
import useWindowSize from "../../useWindowSize";

export default function BigText({ style, children, ...props }) {
  const height = "80px";
  const fontSize = "5em";
  const [w, h] = useWindowSize();

  return (
    <p
      style={{
        position: "relative",
        width: "100",
        height,
        fontSize,
        color: "#85c1e9",
        lineHeight: height,
        fontWeight: "800",
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
