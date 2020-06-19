import React, { useEffect, useState } from "react";

import FixedCallToAction from "../FixedCallToAction";
import Flex from "../../atoms/Flex/index";
import FullHeight from "../../atoms/FullHeight/index";
import Particles from "react-particles-js";
import Wave from "react-wavify";
import Waves from "../../molecules/Waves";
import colors from "../../colors";
import useWindowSize from "../../useWindowSize";

export default function JumboTron({}) {
  const [w, h] = useWindowSize();
  const [landscape, setLandscape] = useState(true);
  const percent = 0.9;
  // const [saved_height] = useState(h * percent);
  // const height = w > h ? h * percent : saved_height;
  const height = h * percent;

  useEffect(() => {
    if (w > h) {
      if (landscape === false) {
        setLandscape(() => {
          setLandscape(false);
          setLandscape(true);
        });
      }
    } else {
      if (landscape === true) {
        setLandscape(() => {
          setLandscape(true);
          setLandscape(false);
        });
      }
    }
  }, [w, h]);

  return (
    <FullHeight
      percent={percent}
      style={{
        backgroundColor: colors.background,
      }}
    >
      <Flex margin="2%" width="90%" style={{ zIndex: 5 }}>
        <Flex class="flex-item" flex-grow="10" className="header">
          <div
            style={{
              textAlign: "center",
              color: colors.light,
            }}
          >
            <a href="#portfolio">
              <h1
                className=""
                style={{
                  cursor: "pointer",
                  textShadow:
                    "black 0.1vh 0.1vh, aliceblue 0.2vh 0.2vh, black 0.3vh 0.3vh",
                }}
              >
                <span
                  style={{
                    fontSize: w > h || true ? "10.5vw" : "12vw",
                    margin: 0,
                  }}
                >
                  Hi, I'm James
                </span>
                <br />
                <span
                  style={{
                    fontSize: w > h || true ? "5.86vw" : "7vw",
                    margin: 0,
                  }}
                >
                  and I make applications
                </span>
                <br />
                <span
                  style={{ fontSize: "3.54vw", margin: 0, lineHeight: "5vw" }}
                >
                  for humans on web and mobile devices
                </span>
              </h1>
            </a>
          </div>
        </Flex>
      </Flex>
      <FixedCallToAction />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 3,
          width: "100vw",
          height: height + "px",
          background:
            "linear-gradient(0deg," + colors.primary + "," + "#5995E0" + ")",

          opacity: 0.1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 2,
          width: "100vw",
          height: height + "px",
        }}
      >
        <Particles
          width="100vw"
          height={height + "px"}
          params={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: ["#C7514D", "#5995e0", "#E1BD14", "#56905F"],
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#b6b2b2",
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.5,
                  sync: false,
                },
              },
              size: {
                value: 19,
                random: true,
                anim: {
                  enable: true,
                  speed: 6,
                  size_min: 16,
                  sync: true,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#c8c8c8",
                opacity: 0.1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <Waves
        waves={[
          "#EEEEEE",
          "#D9E1EC",
          "#C3D5EA",
          "#AEC8E8",
          "#99BBE6",
          "#84AEE4",
          "#6EA2E2",
          "#5995E0",
        ].reverse()}
      />
    </FullHeight>
  );
}
