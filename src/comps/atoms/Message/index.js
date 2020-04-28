import "./willChange.css";

import React, { useEffect, useState } from "react";
import { animated, useTrail } from "react-spring";

import useWindowSize from "../../useWindowSize";

const DEFAULT_SHOW = true;
const DEFAULT_CURSOR = true;
const DEFAULT_CONFIG = { mass: 5, tension: 1000, friction: 90 };
const DEFAULT_LINES = ["a", "message"];
const DEFAULT_AUTOCLOSE = false;
const DEFAULT_AUTOCLOSECALLBACK = () => {};
const DEFAULT_PARENT_STYLE = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const DESKTOP_CONSTANT = 10;
const MOBILE_CONSTANT = 6;

export default function Message({
  lines, // string or array
  config, // object
  cursor, // boolean
  show, // boolean
  autoclose, // boolean || number
  autocloseCallback, // function
  parentStyle, // object
}) {
  if (typeof show === "undefined") show = DEFAULT_SHOW;
  if (typeof cursor === "undefined") cursor = DEFAULT_CURSOR;
  if (typeof config === "undefined") config = DEFAULT_CONFIG;
  if (typeof lines === "undefined") lines = DEFAULT_LINES;
  if (typeof lines === "string") lines = lines.split(" ");
  if (typeof autoclose === "undefined") autoclose = DEFAULT_AUTOCLOSE;
  if (autoclose === true) autoclose = 1000;
  if (typeof autocloseCallback === "undefined") {
    autocloseCallback = DEFAULT_AUTOCLOSECALLBACK;
  }

  const [w, h] = useWindowSize();

  const [toggle, set] = useState(show ? true : false);
  const trail = useTrail(lines.length, {
    config: config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    minHeight: toggle
      ? w > h
        ? DESKTOP_CONSTANT * 8
        : MOBILE_CONSTANT * 8 // desktop : mobile
      : 0,
    from: { opacity: 0, x: 20, minHeight: 0 },
  });

  useEffect(() => {
    let autocloseTimer;
    if (autoclose) {
      autocloseTimer = setTimeout(() => {
        set(false);
        autocloseCallback();
      }, autoclose);
    }

    return () => {
      if (autoclose) {
        clearTimeout(autocloseTimer);
      }
    };
  }, [autoclose, autocloseCallback]);

  return (
    <animated.div
      style={{
        ...DEFAULT_PARENT_STYLE,
        cursor: cursor ? "pointer" : "unset",
        ...parentStyle,
      }}
      onClick={() => set((state) => !state)}
    >
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={lines[index]}
            className="willChange"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
              position: "relative",
              width: "100%",
              color: w > h ? "palevioletred" : "#CFFFE5",
              // color: "palevioletred",
              lineHeight: "80%",
              fontSize:
                w > h ? `${DESKTOP_CONSTANT}vw` : `${MOBILE_CONSTANT}vh`, // desktop : mobile
              fontWeight: "800",
              overflow: "hidden",
              textShadowColor: "rgba(112, 219, 184, 0.75)",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 10,
            }}
          >
            <animated.div
              style={{ height, overflow: "hidden", paddingBottom: "2.9%" }}
            >
              {lines[index]}
            </animated.div>
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
}
