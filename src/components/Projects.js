import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import VideoEmbed from "./VideoEmbed";
import menuVueImg from "../assets/images/menuvue.png";
import wanderListImg from "../assets/images/wanderlist.png";
import waitlistImg from "../assets/images/waitlist.png";
import iWanderImg from "../assets/images/iwander.png";
import { Wrapper, Content, Title } from "../styles/Content";
import ProjectNotice from "./ProjectNotice";
import useIntersection from "../hooks/useIntersection";

const projectsData = [
  {
    id: 1,
    name: "Menu Vue",
    created: "Mar 2022",
    image: menuVueImg,
    description:
      "Build menus for restaurants and allow them to be easily accessed by scanning a QR code.",
    githubLink: "https://github.com/wilfredbayudan/menu-vue",
    videoEmbed: `https://player.vimeo.com/video/684118517?h=d5bbce6bb2&amp;badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479"`,
    demoUrl: "https://menu-vue.herokuapp.com",
    notice:
      "This app is hosted on Heroku and may take a few moments to load. Demo account credentials are provided on  the login page.",
    herokuCheck: "https://menu-vue.herokuapp.com/businesses",
    stack: ["React", "Redux", "Ruby", "Rails", "PostgreSQL"],
  },
  {
    id: 2,
    name: "Wanderlist",
    created: "Jan 2022",
    image: wanderListImg,
    description:
      "Create and share lists of travel destinations. Users may view bucketlists, interact with them through likes and comments, or create and share their own.",
    githubLink: "https://github.com/wilfredbayudan/wanderlist-server",
    videoEmbed: `https://player.vimeo.com/video/661057433?h=8103f1c499&amp;badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479`,
    demoUrl: "https://wanderlist.jaybayudan.com",
    notice:
      "This app is partially hosted on Heroku and may take a few moments to load.",
    herokuCheck: "https://wanderlist-server.herokuapp.com/bucketlists",
    stack: ["React", "Ruby", "Sinatra", "SQLite"],
  },
  {
    id: 3,
    name: "Waitlist Integration",
    created: "Oct 2021",
    image: waitlistImg,
    description:
      "View and join a virtual waitlist by integrating with a third party waitlist API. Optionally collect and store contact tracing information in a separate database. Currently used by ~20,000 customers a month.",
    githubLink: "https://github.com/wilfredbayudan/waitlist-frontend",
    videoEmbed: `https://player.vimeo.com/video/630541398?h=b397944b1d&amp;badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479`,
    demoUrl: "https://dev.jaybayudan.com/wwv2/102/",
    notice: null,
    stack: ["React", "PHP", "MySQL"],
  },
  {
    id: 4,
    name: "iWander",
    created: "Sep 2021",
    image: iWanderImg,
    description:
      "Create a bucket list of countries using the REST Countries API and MapBox.",
    githubLink: "https://github.com/wilfredbayudan/iwander",
    videoEmbed: `https://player.vimeo.com/video/630462554?h=e758ee9c83&amp;badge=0&amp;autopause=0&autoplay=1&amp;player_id=0&amp;app_id=58479"`,
    demoUrl: "https://dev.jaybayudan.com/fis/phase1v2",
    notice: null,
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div,
  img {
    opacity: 0;
    transition: all 500ms ease-in-out;
  }

  div.active,
  div.active img,
  div.active div {
    opacity: 1;
  }
`;

const Projects = ({ projectsRef }) => {
  const [scroll, setScroll] = useState(false);
  const [viewEmbed, setViewEmbed] = useState(null);

  const inViewport = useIntersection(projectsRef);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight - window.innerHeight / 1.25)
        setScroll(true);
    });
  }, []);

  return (
    <Wrapper ref={projectsRef}>
      <VideoEmbed viewEmbed={viewEmbed} setViewEmbed={setViewEmbed} />
      <ProjectNotice />
      <Content className={scroll ? "active" : ""}>
        <Title>Projects</Title>
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
