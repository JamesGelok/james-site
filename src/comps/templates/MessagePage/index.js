import Flex from "../../atoms/Flex";
import FullScreenFlex from "../FullScreenFlex";
import Message from "../../atoms/Message";
import React from "react";
import { animated } from "react-spring";
import colors from "../../colors";
const FullScreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  margin: 0,
  border: "none",
  width: "100%",
  height: "100%",
  display: "relative",
};

export default function MessagePage({
  lines, // string or array
  config, // object
  cursor, // boolean
  show, // boolean
  autoclose, // boolean || number
  autocloseCallback, // function
  parentStyle, // object,
  behind: Behind, // react component
  frontZIndex,
  opacity,
  ...props
}) {
  return (
    <FullScreenFlex {...props}>
      {Behind && <animated.div style={FullScreenStyle}>{Behind}</animated.div>}
      <Flex
        style={{
          opacity,
          zIndex: frontZIndex,
          background: colors.background,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Message
          {...{
            lines,
            config,
            cursor,
            show,
            autoclose,
            autocloseCallback,
            parentStyle: {
              ...parentStyle,
              opacity,
            },
          }}
        />
      </Flex>
    </FullScreenFlex>
  );
}
