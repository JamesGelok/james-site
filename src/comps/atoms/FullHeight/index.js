import React, { useState } from "react";

import Flex from "../Flex";
import useWindowSize from "../../useWindowSize";

export default function FullHeight({ percent, style, children, ...props }) {
  const [w, h] = useWindowSize();
  const [saved_height] = useState(h);
  const height = w < h ? saved_height : h;
  percent = percent || 1;
  return (
    <Flex style={{ height: `${height * percent}px`, ...style }} {...props}>
      {children}
    </Flex>
  );
}
