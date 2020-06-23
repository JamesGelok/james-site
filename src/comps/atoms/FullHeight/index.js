import React, { useState } from "react";

import Flex from "../Flex";
import useWindowSize from "../../useWindowSize";

export default function FullHeight({ percent = 1, style, children, ...props }) {
  let [w, h] = useWindowSize();
  const [saved_height] = useState(h);
  let height = w < h ? saved_height : h;
  return (
    <Flex style={{ height: `${height * percent}px`, ...style }} {...props}>
      {children}
    </Flex>
  );
}
