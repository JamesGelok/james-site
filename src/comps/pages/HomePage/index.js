import BigText from "../../atoms/BigText";
import Flex from "../../atoms/Flex";
import FullHeight from "../../atoms/FullHeight";
import FullScreenFlex from "../../templates/FullScreenFlex";
import JumboTron from "../../organisms/JumboTron/index";
import Message from "../../atoms/Message";
import React from "react";
import Wave from "react-wavify";
import colors from "../../colors";
import useWindowSize from "../../useWindowSize";

export default function MessageListPage({ ...props }) {
  return (
    <FullScreenFlex {...props}>
      <JumboTron />
      <FullHeight style={{ background: colors.secondary }}>
        <Flex flex-direction="row">
          <div>
            <h1>Languages</h1>
            <ul>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>C</li>
              <li>Web Markup</li>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
              </ul>
            </ul>
          </div>
          <div>
            <h1>Languages</h1>
            <ul>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>C</li>
              <li>Web Markup</li>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
              </ul>
            </ul>
          </div>
        </Flex>
      </FullHeight>
      <FullHeight style={{ background: colors.secondary }}>
        <Flex style={{ position: "relative" }}>
          {[
            "#f3e7c9",
            "#ddceb3",
            "#c6b59e",
            "#b09d89",
            "#988675",
            "#827063",
            "#6c5a50",
            "#57463f",
            "#43322d",
            "#2f211e",
          ].map((el, i) => {
            return (
              <Wave
                fill={el}
                paused={false}
                style={{
                  position: "absolute",
                  bottom: 15 * 5 - i * 15,
                  zIndex: 8,
                }}
                options={{
                  height: 20,
                  amplitude: 20,
                  speed: 0.08,
                  points: 4 + Math.floor(Math.random() * 6),
                }}
              />
            );
          })}
        </Flex>
      </FullHeight>
    </FullScreenFlex>
  );
}
