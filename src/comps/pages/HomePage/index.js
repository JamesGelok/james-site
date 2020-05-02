import Flex from "../../atoms/Flex";
import FullHeight from "../../atoms/FullHeight";
import FullScreenFlex from "../../templates/FullScreenFlex";
import JumboTron from "../../organisms/JumboTron/index";
import ProjectsListModule from "../../organisms/ProjectsListModule/index";
import React from "react";
import Wave from "react-wavify";
import colors from "../../colors";

class Project {
  constructor({ title, subtitle, thumbnail, date }) {
    this.title = title;
    this.subtitle = subtitle;
    this.thumbnail = thumbnail;
    this.date = date;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi() {
    return `Hi, ${this.firstName} ${this.lastName}`;
  }
  static personCount() {
    return 3;
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
];

export default function MessageListPage({ ...props }) {
  return (
    <FullScreenFlex {...props}>
      <JumboTron />
      <FullHeight style={{ background: colors.secondary }}>
        <Flex flex-direction="row" align-items="flex-start">
          <ProjectsListModule
            data={projects}
            active={false}
            expose={({ open, set }) => !open && setTimeout(set(true), 2000)}
          />
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
