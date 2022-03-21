import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";

const projectsData = [
  {
    id: 1,
    name: "Menu Vue",
    created: "Feb 8, 2022",
    image:
      "https://jaybayudan.com/static/media/splash.cd384b137b59183a7f88.jpg",
    description:
      "Build menus for restaurants and allow them to be easily viewed and shared by scanning a QR code.",
    githubLink: "https://github.com/wilfredbayudan/menu-vue",
    videoEmbed: `<div style="padding:60.91% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/684118517?h=d5bbce6bb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Menu Vue"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    demoUrl: "https://menu-vue.herokuapp.com",
    isHeroku: true,
  },
  {
    id: 2,
    name: "Menu Vue",
    created: "Feb 8, 2022",
    image:
      "https://jaybayudan.com/static/media/splash.cd384b137b59183a7f88.jpg",
    description:
      "Build menus for restaurants and allow them to be easily viewed and shared by scanning a QR code.",
    githubLink: "https://github.com/wilfredbayudan/menu-vue",
    videoEmbed: `<div style="padding:60.91% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/684118517?h=d5bbce6bb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Menu Vue"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    demoUrl: "https://menu-vue.herokuapp.com",
    isHeroku: true,
  },
  {
    id: 3,
    name: "Menu Vue",
    created: "Feb 8, 2022",
    image:
      "https://jaybayudan.com/static/media/splash.cd384b137b59183a7f88.jpg",
    description:
      "Build menus for restaurants and allow them to be easily viewed and shared by scanning a QR code.",
    githubLink: "https://github.com/wilfredbayudan/menu-vue",
    videoEmbed: `<div style="padding:60.91% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/684118517?h=d5bbce6bb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Menu Vue"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    demoUrl: "https://menu-vue.herokuapp.com",
    isHeroku: true,
  },
  {
    id: 4,
    name: "Menu Vue",
    created: "Feb 8, 2022",
    image:
      "https://jaybayudan.com/static/media/splash.cd384b137b59183a7f88.jpg",
    description:
      "Build menus for restaurants and allow them to be easily viewed and shared by scanning a QR code.",
    githubLink: "https://github.com/wilfredbayudan/menu-vue",
    videoEmbed: `<div style="padding:60.91% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/684118517?h=d5bbce6bb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Menu Vue"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
    demoUrl: "https://menu-vue.herokuapp.com",
    isHeroku: true,
  },
];

const Wrapper = styled.div`
  background-color: #22272e;
  height: 100vh;
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
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(
        window.scrollY > window.innerHeight - window.innerHeight / 1.25
      );
    });
  }, []);

  return (
    <Wrapper>
      <Content className={scroll ? "active" : ""}>
        <Title>PROJECTS</Title>
        <ProjectContainer>
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </ProjectContainer>
      </Content>
    </Wrapper>
  );
};

export default Projects;
