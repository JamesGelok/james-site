import React from "react";
import colors from "../../colors";
import useWindowSize from "../../useWindowSize";

export default function BigText({ style, children, ...props }) {
  const height = "80px";
  const fontSize = "5em";

  return (
    <p
      style={{
        position: "relative",
        width: "100",
        fontSize,
        color: colors.light,
        textShadow: colors.secondary + "77 1px 1px 1px",
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
