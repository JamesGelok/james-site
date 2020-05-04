import Flex from "../../atoms/Flex";
import FullHeight from "../../atoms/FullHeight";
import FullScreenFlex from "../../templates/FullScreenFlex";
import JumboTron from "../../organisms/JumboTron/index";
import ProjectsListModule from "../../organisms/ProjectsListModule/index";
import React from "react";
import Wave from "react-wavify";
import Waves from "../../molecules/Waves";
import colors from "../../colors";
import styled from "styled-components";
import useScroll from "../../useScroll";

class Project {
  constructor({ title, subtitle, thumbnail, date }) {
    this.title = title;
    this.subtitle = subtitle;
    this.thumbnail = thumbnail;
    this.date = date;
  }
}

const projects = [
  new Project({
    title: "Project 1",
    subtitle: "This was a project alright 1",
    thumbnail:
      "https://dailyblogger.com/wp-content/uploads/2019/02/Best_YouTube_Thumbnail_Tool.png",
    date: new Date("October 21, 2010"),
    logo: "",
  }),
  new Project({
    title: "Project 2",
    subtitle: "This was a project alright 2",
    thumbnail:
      "https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg",
    date: new Date("October 21, 2009"),
    logo: "",
  }),
  new Project({
    title: "Project 3",
    subtitle: "This was a project alright 3",
    thumbnail:
      "https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg",
    date: new Date("October 21, 2009"),
    logo: "",
  }),
  new Project({
    title: "Project 4",
    subtitle: "This was a project alright 4",
    thumbnail:
      "https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg",
    date: new Date("October 21, 2009"),
    logo: "",
  }),
  new Project({
    title: "Project 5",
    subtitle: "This was a project alright 5",
    thumbnail:
      "https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg",
    date: new Date("October 21, 2009"),
    logo: "",
  }),
  new Project({
    title: "Project 6",
    subtitle: "This was a project alright 6",
    thumbnail:
      "https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg",
    date: new Date("October 21, 2009"),
    logo: "",
  }),
];

const Portfolio = styled.h1`
  border-bottom-color: ${colors.primary};
  border-bottom-width: 4px;
  border-bottom-style: solid;
`;

export default function HomePage({ ...props }) {
  return (
    <FullScreenFlex {...props}>
      <JumboTron />
      <Flex style={{ background: colors.secondary, zIndex: 8 }}>
        <Flex flex-direction="column" align-items="flex-start" width="65%">
          <Portfolio>Portfolio</Portfolio>
          <ProjectsListModule data={projects} active={false} />
        </Flex>
      </Flex>
      <FullHeight style={{ background: colors.secondary }}>
        <Flex style={{ position: "relative" }}>
          <Waves />
        </Flex>
      </FullHeight>
    </FullScreenFlex>
  );
}
