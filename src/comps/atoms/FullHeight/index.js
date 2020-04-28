import Flex from "../Flex";
import React from "react";
import useWindowSize from "../../useWindowSize";

export default function FullHeight({ style, children, ...props }) {
  const [w, h] = useWindowSize();
  return (
    <Flex style={{ height: `${h}px`, ...style }} {...props}>
      {children}
    </Flex>
  );
}
