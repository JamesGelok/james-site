import "./close.css";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  animated,
  config,
  useChain,
  useSpring,
  useTransition,
} from "react-spring";

import styled from "styled-components";
import useWindowSize from "../../useWindowSize";

const Container = styled(animated.div)`
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

export default function ModalWrapper({ modal: Modal, children }) {
  const [open, set] = useState(true);

  const [compHeight, setCompHeight] = useState(0);
  const [compWidth, setCompWidth] = useState(0);
  const comp = useCallback((node) => {
    if (node !== null) {
      setCompHeight(node.getBoundingClientRect().height);
      setCompWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const compRef = useRef();
  const { opacity } = useSpring({
    ref: compRef,
    config: config.stiff,
    from: {
      opacity: 1,
    },
    to: {
      opacity: open ? 0 : 1,
    },
  });

  const closed = {
    height: 0 + "px", // must be in px
    width: 0 + "px", // must be in px
    background: "rgba(255,255,255,0)",
    padding: "0px",
  };
  const modal = {
    height: "270px",
    width: "300px",
    background: "rgba(255,255,255,1)",
    padding: "25px",
  };

  const springRef = useRef();
  const { height, width, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
      height: closed.height,
      width: closed.width,
      background: closed.background,
    },
    to: {
      height: open ? modal.height : closed.height,
      width: open ? modal.width : closed.width,
      background: modal.background,
    },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [compRef, springRef] : [springRef, compRef], [
    open ? 0 : 0.1,
    open ? 0 : 0.2,
  ]);

  return (
    <>
      <Container style={{ ...rest, width, height, display: "flex" }}>
        <animated.div
          onClick={() => set(true)}
          style={{
            position: "absolute",
            top: 1 - compHeight / 2 + "px",
            // left: 1 - compWidth / 2 + 'px',
            opacity,
          }}
          {...rest}
        >
          <div ref={comp} style={{ height: "auto", width: "auto" }}>
            {children}
          </div>
        </animated.div>
        <div
          style={{ display: open ? "unset" : "none" }}
          className="close"
          onClick={() => set(false)}
        />
        <div
          style={{
            display: open ? "unset" : "none",
            width: "100%",
            opacity,
            overflow: "auto",
          }}
        >
          <Modal set={set} open={open} />
        </div>
      </Container>
    </>
  );
}
