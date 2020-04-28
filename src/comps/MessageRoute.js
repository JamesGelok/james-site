import React, { useState } from "react";

import MessagePage from "./templates/MessagePage";
import { Route } from "react-router-dom";
import { useSpring } from "react-spring";

export default function MessageRoute({
  lines,
  // route props below
  component,
  children,
  render,
  ...props
}) {
  const [showMsg, setShowMsg] = useState(true);
  const time = 1500;
  const timeForOutro = 500;
  const closeTime = time - timeForOutro;

  const spring = useSpring({
    config: { mass: 5, tension: 1000, friction: 90 },
    opacity: showMsg ? 1 : 0,
    x: showMsg ? 0 : 20,
    zIndex: showMsg ? 10 : -10,
    from: { opacity: 0, x: 20 },
  });

  return (
    <Route {...props}>
      <MessagePage
        opacity={spring.opacity}
        frontZIndex={spring.zIndex}
        lines={lines}
        autoclose={closeTime}
        autocloseCallback={() => {
          console.log("heyyyyy");
          setTimeout(() => {
            setShowMsg(false);
          }, timeForOutro);
        }}
        behind={<>{component || children || render}</>}
      />
    </Route>
  );
}
