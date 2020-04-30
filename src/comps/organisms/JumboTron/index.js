import React, { useState } from "react";

import FixedCallToAction from "../FixedCallToAction";
import Flex from "../../atoms/Flex/index";
import FullHeight from "../../atoms/FullHeight/index";
import Particles from "react-particles-js";
import Wave from "react-wavify";
import colors from "../../colors";
import useScroll from "../../useScroll";
import useWindowSize from "../../useWindowSize";

export default function JumboTron() {
  const [w, h] = useWindowSize();
  const [saved_height] = useState(h);
  const height = w > h ? h : saved_height;
  return (
    <FullHeight
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
              textShadow: colors.secondary + "77 2px 2px 0px",
            }}
          >
            <h1 style={{ fontSize: w > h ? "6em" : "12vw", margin: 0 }}>
              Hi, I'm James
            </h1>
            <h1 style={{ fontSize: w > h ? "3.38em" : "7vw", margin: 0 }}>
              and I make applications
            </h1>
            <h1 style={{ fontSize: "2em", margin: 0 }}>
              for humans on web and mobile devices
            </h1>
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
          zIndex: 1,
          width: "100vw",
          height: height + "px",
          background:
            "linear-gradient(0deg," +
            colors.primary +
            "," +
            colors.secondary +
            ")",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 0,
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
                value: 0.5211089197812949,
                random: false,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 19,
                random: true,
                anim: {
                  enable: true,
                  speed: 6,
                  size_min: 1.6,
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
                  speed: 3,
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
      <Wave
        fill={colors.secondary}
        paused={false}
        style={{ zIndex: 8 }}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: w,
          height: "50px",
          bottom: "0px",
          backgroundColor: colors.secondary,
        }}
      ></div>
    </FullHeight>
  );
}
