import "./form.css";

import React, { useCallback, useState } from "react";

import Email from "react-email-autocomplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalWrapper from "../../molecules/ModalWrapper";
import { animated } from "react-spring";
import colors from "../../colors";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import useScroll from "../../useScroll";
import useWindowSize from "../../useWindowSize";

export default function FixedCallToAction() {
  const { scrollY, scrollX, scrollDirection } = useScroll();
  const [w, h] = useWindowSize();
  const btnWidth = 235.8125;
  const btnHeight = 70;

  // const [compHeight, setCompHeight] = useState(0);
  const [compWidth, setCompWidth] = useState(0);
  const comp = useCallback((node) => {
    if (node !== null) {
      // setCompHeight(node.getBoundingClientRect().height);
      setCompWidth(node.getBoundingClientRect().width);
    }
  }, []);
  console.log({ compWidth });

  const beCircle = scrollY > 100;
  const center = w / 2 - (compWidth === 0 ? btnWidth : compWidth) / 2;
  const transition = "all 500ms ease 0s";

  return (
    <animated.div
      ref={comp}
      id="eyy"
      style={{
        position: "fixed",
        bottom: "7.5%",
        left: beCircle ? "35px" : center,
        zIndex: 9,
        filter: "drop-shadow(0.5px 0.5px 1.5px #333)",
        transition,
      }}
    >
      <ModalWrapper
        modal={() => {
          return (
            <div className="form">
              <h1 style={{ flexGrow: 0.5 }}>Contact Me</h1>
              <a
                href="https://www.linkedin.com/in/jamesgelok/"
                style={{ cursor: "pointer", margin: "1em 0" }}
                target="_blank"
              >
                <button
                  style={{
                    fontSize: "1em",
                    margin: "1em",
                    width: "100%",
                    height: "3em",
                    background: colors.primary,
                    color: "white",
                    margin: "0px",
                    background:
                      "linear-gradient(290deg," +
                      colors.dark +
                      "," +
                      colors.secondary +
                      ")",
                    borderRadius: "800px",
                    border: "0",
                    whiteSpace: "nowrap",
                    outline: "none",

                    transition,
                  }}
                >
                  Connect with me on LinkedIn
                </button>
              </a>
              <a
                href="mailto:jdgelok@gmail.com"
                style={{ cursor: "pointer" }}
                target="_blank"
              >
                <button
                  style={{
                    fontSize: "1em",
                    margin: "1em",
                    width: "100%",
                    height: "3em",
                    background: colors.primary,
                    color: "white",
                    margin: "0px",
                    background: "linear-gradient(90deg,#ff587c,#ff531a)",
                    borderRadius: "800px",
                    border: "0",
                    whiteSpace: "nowrap",
                    outline: "none",

                    transition,
                  }}
                >
                  Shoot me an email
                </button>
              </a>
            </div>
          );
        }}
      >
        <button
          style={{
            fontSize: "1em",
            margin: 0,
            background: colors.primary,
            fontSize: "2em",
            color: "white",
            margin: "0px",
            background: "linear-gradient(90deg,#ff587c,#ff531a)",
            padding: "0.5em 1em",
            borderRadius: "800px",
            border: "0",
            whiteSpace: "nowrap",
            outline: "none",
            width: beCircle ? "70px" : btnWidth,
            height: btnHeight,
            transition,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0.5em",
              transform: beCircle ? "scale(0)" : "scale(1)",
              transition,
            }}
          >
            Get In Touch
          </div>
          <div
            style={{
              position: "absolute",
              top: "0.5em",
              left: "0.5em",
              transform: beCircle ? "scale(1)" : "scale(0)",
              transition,
            }}
          >
            <FontAwesomeIcon icon={faMailBulk} />
          </div>
        </button>
      </ModalWrapper>
    </animated.div>
  );
}
