import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import {
  animated,
  config,
  useChain,
  useSpring,
  useTransition,
} from "react-spring";

import styled from "styled-components";
import useWindowSize from "../../useWindowSize";

const darkBrown = "rgb(102, 102, 102)";

const ScalableImg = styled.div`
  width: 100%;
  height: ${({ height }) => height ?? "200px"};
  background-image: url("${({ src }) => src}");
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  text-align: start;
  font-size: 1.8rem;
  margin: 0;
  padding: 4px;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(51, 51, 51);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 51);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(51, 51, 51);
  border-top-style: none;
  border-top-width: 0px;
  color: rgb(51, 51, 51);
  cursor: pointer;
  display: block;
  font-family: "proxima nova light", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 18px;
  font-weight: 400;
  height: 21px;
  line-height: 21.6px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-bottom: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline-color: rgb(51, 51, 51);
  outline-style: none;
  outline-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-align: left;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  vertical-align: bottom;
  width: 254.406px;
  font-weight: 200;
  line-height: 1em;
  padding-top: 0.3em;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
`;
const SubTitle = styled.h2`
  text-align: start;
  margin: 0;
  padding: 4px;
  display: block;
  margin: 0;
  font-size: 16px;
  font-size: 1.6rem;
  color: #666666;
  line-height: 1.2em;
  padding-top: 0.2em;
  height: 1.3em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  border-bottom-color: ${darkBrown};
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: ${darkBrown};
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: ${darkBrown};
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: ${darkBrown};
  border-top-style: none;
  border-top-width: 0px;
  color: ${darkBrown};
  cursor: pointer;
  display: block;
  font-family: "proxima nova light", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  height: 20.7969px;
  line-height: 19.2px;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  margin-block-end: 0px;
  margin-block-start: 0px;
  margin-bottom: 0px;
  margin-inline-end: 0px;
  margin-inline-start: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline-color: ${darkBrown};
  outline-style: none;
  outline-width: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 3.2px;
  text-align: left;
  text-overflow: ellipsis;
  text-size-adjust: 100%;
  white-space: nowrap;
  width: 254.406px;
  -webkit-font-smoothing: auto;
  font-weight: 300;
`;
const ProjectCard = styled(animated.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  width: 300px;
  height: 250px;
  padding: 6px;
  margin: 6px;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 0.5em;
  position: relative;
  overflow: hidden;
  margin: 0 2.4038461538% 2.4038461538% 0;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  transition: all 333ms;

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.4);
    opacity: 1 !important;
  }
`;
const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export default function ProjectsListModule({ data = [], expose, active }) {
  const [open, set] = useState(active != null ? active : false);
  const [hover, setHover] = useState(false);
  const [hoveringProjectsList, setHoveringProjectsList] = useState(false);

  // const springRef = useRef();
  const { opacity, ...rest } = useSpring({
    // ref: springRef,
    config: config.stiff,
    from: {
      opacity: 1,
    },
    to: {
      opacity: hover ? 0.8 : 1,
    },
  });

  // const transRef = useRef();
  // const transitions = useTransition(open ? data : [], (item) => item.title, {
  //   ref: transRef,
  //   unique: true,
  //   trail: 600 / data.length,
  //   from: { transform: "translate(1000%, 0%)" },
  //   enter: { transform: "translate(0%, 0%)" },
  //   leave: { transform: "translate(1000%, 0%)" },
  // });

  // useChain(open ? [transRef] : [transRef], [open ? 0.9 : 1]);

  // if (typeof expose === "function") expose({ open, set });

  // const opacity = 1;
  const transitions = data.map((item, i) => ({
    item,
    key: Math.random() + i,
    props: {},
  }));

  return (
    <ProjectsList
      onMouseOver={() => setHoveringProjectsList(true)}
      onMouseLeave={() => {
        setHoveringProjectsList(false);
        setHover(false);
      }}
    >
      {(transitions || []).map(({ item, key, props }) => {
        return (
          <ProjectCard
            key={key}
            style={{
              ...props,
              opacity,
            }}
            onMouseOver={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
          >
            <ScalableImg
              style={{ flexGrow: "1" }}
              src={item.thumbnail}
              height="70%"
            />
            <div style={{ flexGrow: "0" }}>
              <Title>{item.title}</Title>
              <SubTitle>{item.subtitle}</SubTitle>
            </div>
          </ProjectCard>
        );
      })}
    </ProjectsList>
  );
}
