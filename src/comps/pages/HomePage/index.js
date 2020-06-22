import Flex from "../../atoms/Flex";
import FullScreenFlex from "../../templates/FullScreenFlex";
import JumboTron from "../../organisms/JumboTron/index";
import ProjectsListModule from "../../organisms/ProjectsListModule/index";
import React from "react";
import Waves from "../../molecules/Waves";
import colors from "../../colors";
import styled from "styled-components";

class Project {
  constructor({
    title,
    subtitle,
    thumbnail,
    date,
    logo,
    logoWidth,
    link,
    cursor,
  }) {
    this.title = title;
    this.subtitle = subtitle;
    this.thumbnail = thumbnail;
    this.date = date;
    this.logo = logo;
    this.logoWidth = logoWidth;
    this.link = link;
    this.cursor = cursor;
  }
}

const projects = [
  new Project({
    title: "Sherlock",
    subtitle: "Study Strong",
    thumbnail: require("../../../images/sherlockapp.png"),
    date: new Date("October 21, 2020"),
    logo: require("../../../images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"),
    logoWidth: "120px",
    link: "https://apps.apple.com/app/Sherlock-Cards/id1509065789",
  }),
  new Project({
    title: "fathering.me",
    subtitle: "One dad at a time",
    thumbnail: require("../../../images/fathering.png"),
    date: new Date("October 21, 2010"),
    logo: require("../../../images/WordPress-logotype-simplified.png"),
    link: "https://web.archive.org/web/20170919155533/https://fathering.me/",
  }),
  new Project({
    title: "Inity (Open Source NPM)",
    subtitle: "Fun Shorter Syntax",
    thumbnail: require("../../../images/inity.png"),
    date: new Date("Dec 23, 2019"),
    logo: require("../../../images/github.svg"),
    link: "https://github.com/JamesGelok/inity",
  }),
  new Project({
    title: "Tron Bike Python",
    subtitle: "Fun Shorter Syntax",
    thumbnail: require("../../../images/tron.png"),
    date: new Date("Dec 23, 2019"),
    logo: require("../../../images/python-logo-1.png"),
    logoWidth: "120px",
    link: "https://github.com/JamesGelok/inity",
  }),
  new Project({
    title: "React eCommerce",
    subtitle: (
      <span>
        <span className="hover-red">Proprietary</span> eCommerce App
      </span>
    ),
    thumbnail: require("../../../images/reactecommerce.jpg"),
    date: new Date("May 1, 2020"),
    logo: require("../../../images/php-react.png"),
    logoWidth: "100px",
    link: false,
    cursor: "not-allowed",
  }),
  new Project({
    title: "React Texting Manager",
    subtitle: (
      <span>
        <span className="hover-red">Proprietary</span> CRM App
      </span>
    ),
    thumbnail: require("../../../images/reacttexting.jpg"),
    date: new Date("May 1, 2020"),
    logo: require("../../../images/php-react.png"),
    logoWidth: "100px",
    link: false,
    cursor: "not-allowed",
  }),
  new Project({
    title: "Tron Bike Python",
    subtitle: "Fun Shorter Syntax",
    thumbnail: require("../../../images/tron.png"),
    date: new Date("Dec 23, 2019"),
    logo: require("../../../images/python-logo-1.png"),
    logoWidth: "120px",
    link: "https://github.com/JamesGelok/inity",
  }),
  new Project({
    title: "StraightPath REI",
    subtitle: "Guided Wordpress Implementation",
    thumbnail: require("../../../images/straightpath.png"),
    date: new Date("October 21, 2009"),
    logo: require("../../../images/WordPress-logotype-simplified.png"),
    link: "http://straightpathrei.com/",
  }),
  new Project({
    title: "RonaldGelok.com",
    subtitle: "Retire. Grow. Achieve",
    thumbnail: require("../../../images/rga.png"),
    date: new Date("October 21, 2017"),
    logo: require("../../../images/WordPress-logotype-simplified.png"),
  }),
  new Project({
    title: "Clarity Counselling",
    subtitle: "Professional Counselling | Made with WordPress",
    thumbnail: require("../../../images/clarity.png"),
    date: new Date("October 21, 2017"),
    logo: require("../../../images/WordPress-logotype-simplified.png"),
    link: "http://claritycounselling.net/",
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
          <Portfolio id="portfolio">Portfolio</Portfolio>
          <ProjectsListModule data={projects} active={false} />
        </Flex>
      </Flex>
      <Flex style={{ background: colors.secondary }}>
        <Flex style={{ position: "relative", paddingTop: "300px" }}>
          <Waves zIndex="8" />
        </Flex>
      </Flex>
    </FullScreenFlex>
  );
}
