import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import VideoEmbed from "./VideoEmbed";

import menuVueImg from "../assets/images/menuvue.png";
import wanderListImg from "../assets/images/wanderlist.png";
import waitlistImg from "../assets/images/waitlist.png";
import iWanderImg from "../assets/images/iwander.png";

const projectsData = [
  {
    id: 1,
    name: "Menu Vue",
    created: "Mar 2022",
    image: menuVueImg,
    description:
      "Build menus for restaurants and allow them to be easily accessed by scanning a QR code.",
    githubLink: "https://github.com/wilfredbayudan/menu-vue",
    videoEmbed: `https://player.vimeo.com/video/684118517?h=d5bbce6bb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"`,
    demoUrl: "https://menu-vue.herokuapp.com",
    isHeroku: true,
  },
  {
    id: 2,
    name: "Wanderlist",
    created: "Jan 2022",
    image: wanderListImg,
    description:
      "Create and share lists of travel destinations. Users may view bucketlists, interact with them through likes and comments, or create and share their own.",
    githubLink: "https://github.com/wilfredbayudan/wanderlist-server",
    videoEmbed: `https://player.vimeo.com/video/661057433?h=8103f1c499&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
    demoUrl: "https://wanderlist.jaybayudan.com",
    isHeroku: true,
  },
  {
    id: 3,
    name: "Waitlist Integration",
    created: "Oct 2021",
    image: waitlistImg,
    description:
      "View and join a virtual waitlist by integrating with a third party waitlist service and optionally collect contact tracing information.",
    githubLink: "https://github.com/wilfredbayudan/waitlist-frontend",
    videoEmbed: `https://player.vimeo.com/video/630541398?h=b397944b1d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`,
    demoUrl: "https://dev.jaybayudan.com/wwv2/102/",
    isHeroku: false,
  },
  {
    id: 4,
    name: "iWander",
    created: "Sep 2021",
    image: iWanderImg,
    description:
      "Create a bucket list of countries using the REST Countries API and MapBox.",
    githubLink: "https://github.com/wilfredbayudan/iwander",
    videoEmbed: `https://player.vimeo.com/video/630462554?h=e758ee9c83&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"`,
    demoUrl: "https://dev.jaybayudan.com/fis/phase1v2",
    isHeroku: false,
  },
];

const Wrapper = styled.div`
  background-color: #22272e;
  min-height: 100vh;
  padding: 20px 20px;
  @media (min-width: 768px) {
    padding: 80px 90px;
  }
  section {
    opacity: 0;
    transition: all 500ms ease-in-out;
    position: relative;
    left: -500px;
  }
  section.active {
    opacity: 1;
    left: 0px;
  }
`;

const Content = styled.section`
  width: 100%;
  max-width: 1600px;
  background: #f1f1f1;
  text-align: left;
  margin: 0 auto;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  color: #000000;
  padding: 0 0 15px 0;
  margin-top: 10px;
  margin-bottom: 20px;
  border-bottom: 4px solid #000000;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Projects = () => {
  const [scroll, setScroll] = useState(false);
  const [viewEmbed, setViewEmbed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(
        window.scrollY > window.innerHeight - window.innerHeight / 1.25
      );
    });
  }, []);

  return (
    <Wrapper>
      <VideoEmbed viewEmbed={viewEmbed} setViewEmbed={setViewEmbed} />
      <Content className={scroll ? "active" : ""}>
        <Title>PROJECTS</Title>
        <ProjectContainer>
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              setViewEmbed={setViewEmbed}
            />
          ))}
        </ProjectContainer>
      </Content>
    </Wrapper>
  );
};

export default Projects;
