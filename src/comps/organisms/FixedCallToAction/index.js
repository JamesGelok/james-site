import "./form.css";

import React, { useCallback, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalWrapper from "../../molecules/ModalWrapper";
import { animated } from "react-spring";
import colors from "../../colors";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import useScroll from "../../useScroll";
import useWindowSize from "../../useWindowSize";

export default function FixedCallToAction({}) {
  const { scrollY } = useScroll();
  const [w] = useWindowSize();
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

  const beCircle = scrollY > 100;
  const center = w / 2 - (compWidth === 0 ? btnWidth : compWidth) / 2;
  const transition = "all 500ms ease";

  return (
    <animated.div
      ref={comp}
      id="eyy"
      style={{
        position: "fixed",
        bottom: beCircle ? "7.5%" : "22.5%",
        left: beCircle ? "35px" : center,
        zIndex: 9,
        filter: "drop-shadow(0.5px 0.5px 1.5px #333)",
        transition:
          "left 300ms cubic-bezier(.32,.02,0,1), bottom 400ms cubic-bezier(.32,.02,0,1)",
        willChange: "left, bottom",
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
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "1em",
                    width: "100%",
                    height: "3em",
                    color: "white",
                    margin: "0px",
                    background:
                      "linear-gradient(290deg," +
                      colors.social.linkedinDark +
                      "," +
                      colors.social.linkedin +
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
                rel="noopener noreferrer"
              >
                <button
                  style={{
                    cursor: "pointer",
                    fontSize: "1em",
                    width: "100%",
                    height: "3em",
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
              textAlign: "center",
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
