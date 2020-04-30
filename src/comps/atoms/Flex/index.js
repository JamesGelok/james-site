import React from "react";
import { animated } from "react-spring";
// import { View } from "react-native";
import styled from "styled-components";

export default function Flex({ children, style, ...props }) {
  const display = "flex";
  const flexGrow = props["flexGrow"]
    ? props["flexGrow"]
    : props["flex-grow"]
    ? props["flex-grow"]
    : 1;
  const flexShrink = props["flexShrink"]
    ? props["flexShrink"]
    : props["flex-shrink"]
    ? props["flex-shrink"]
    : 1;
  const flexBasis = props["flexBasis"]
    ? props["flexBasis"]
    : props["flex-basis"]
    ? props["flex-basis"]
    : "auto";
  const alignItems = props["alignItems"]
    ? props["alignItems"]
    : props["align-items"]
    ? props["align-items"]
    : "center";
  const justifyContent = props["justifyContent"]
    ? props["justifyContent"]
    : props["justify-content"]
    ? props["justify-content"]
    : "space-around";
  const flexDirection = props["flexDirection"]
    ? props["flexDirection"]
    : props["flex-direction"]
    ? props["flex-direction"]
    : "column";
  const alignSelf = props["alignSelf"]
    ? props["alignSelf"]
    : props["align-self"]
    ? props["align-self"]
    : "column";
  // bonus
  const width =
    typeof props["width"] !== "undefined"
      ? props["width"]
      : props["flex-grow"] || props["flexGrow"]
      ? ""
      : "100%";
  const height = props["height"];
  const backgroundColor = props["color"];
  const margin = props["margin"];
  const padding = props["padding"];

  return (
    <animated.div
      style={{
        display,
        flexGrow,
        flexShrink,
        flexBasis,
        alignItems,
        justifyContent,
        flexDirection,
        alignSelf,
        height,
        width,
        backgroundColor,
        margin,
        padding,
        ...style,
      }}
      {...props}
    >
      {children}
    </animated.div>
  );
}
