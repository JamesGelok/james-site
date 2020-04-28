import "../FullScreen/styles.css";

import Flex from "../../atoms/Flex";
import React from "react";

export default function FullScreenFlex({ children, style, ...props }) {
  return (
    <Flex
      style={{
        ...{ minHeight: "100%", display: "flex", overflow: "hidden" },
        ...style,
      }}
      {...props}
    >
      {children}
    </Flex>
  );
}
