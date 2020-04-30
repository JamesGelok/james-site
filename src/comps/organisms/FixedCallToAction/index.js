import Email from "react-email-autocomplete";
import ModalWrapper from "../../molecules/ModalWrapper";
import React from "react";
import { animated } from "react-spring";
import colors from "../../colors";
import useScroll from "../../useScroll";

export default function FixedCallToAction() {
  const { scrollY, scrollX, scrollDirection } = useScroll();
  console.log({ scrollY, scrollX, scrollDirection });

  return (
    <div
      style={{
        position: "fixed",
        bottom: "7.5%",
        zIndex: 9,
        filter: "drop-shadow(0.5px 0.5px 1.5px #333)",
      }}
    >
      <ModalWrapper
        modal={() => {
          return (
            <div>
              <h1>howdy</h1>
              <Email />
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
            borderRadius: "8px",
            border: "0",
            whiteSpace: "nowrap",
            outline: "none",
          }}
        >
          Get In Touch
        </button>
      </ModalWrapper>
    </div>
  );
}
