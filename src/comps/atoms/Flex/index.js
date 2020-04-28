import React from "react";
import { animated } from "react-spring";
// import { View } from "react-native";
import styled from "styled-components";

const DivOrView = ({ children, ...props }) => <div {...props}>{children}</div>; // || View;

const StyledFlex = styled(DivOrView)`
  /* display: flex; */
  /* flex-grow: ${(props) =>
    props["flex-grow"] ? props["flex-grow"] : "1"}; */
  /* flex-shrink: ${(props) =>
    props["flex-shrink"] ? props["flex-shrink"] : "1"}; */
  /* flex-basis: ${(props) =>
    props["flex-basis"] ? props["flex-basis"] : "auto"}; */
  /* width: 100%; */
  /* ${({ color }) => (color ? "background-color: " + color + ";" : "")}; */
  /* align-items: ${(props) =>
    typeof props["align-items"] === "string" ? props["align-items"] : "center"};
  justify-content: ${(props) =>
    typeof props["justify-content"] === "string"
      ? props["justify-content"]
      : "space-around"}; */
  /* flex-direction: ${(props) =>
    props["flex-direction"] ? props["flex-direction"] + ";" : "column ; "}; */
  /* ${(props) =>
    props["align-self"] ? "align-self: " + props["align-self"] + ";" : ""}; */
  ${(props) => (props["margin"] ? "margin: " + props["margin"] + ";" : "")};
  ${(props) => (props["padding"] ? "padding: " + props["padding"] + ";" : "")};
`;

export function Flex({ children, ...props }) {
  return <StyledFlex {...props}>{children}</StyledFlex>;
}

export default function AnimatedFlex({ children, style, ...props }) {
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
  const width = props["width"] ? props["width"] : "100%";
  const color = props["color"];
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
        width,
        color,
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
