import Flex from "../Flex";
import React from "react";
import useWindowSize from "../../useWindowSize";

export default function FullHeight({ percent = 1, style, children, ...props }) {
  const [, height] = useWindowSize();
  // const [saved_height] = useState(h);
  // const height = w < h ? saved_height : h;
  return (
    <Flex style={{ height: `${height * percent}px`, ...style }} {...props}>
      {children}
    </Flex>
  );
}
