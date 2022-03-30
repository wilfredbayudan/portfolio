import React from "react";
import styled from "styled-components";
import { Wrapper, Content, Title } from "../styles/Content";
import Skill from "./Skill";

const StyledWrapper = styled(Wrapper)`
  background-color: #22272e;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  div.active {
    opacity: 1;
  }
`;

const skillData = [
  { label: "html5", icon: "devicon-html5-plain" },
  { label: "css3", icon: "devicon-css3-plain" },
  { label: "javascript", icon: "devicon-javascript-plain" },
  { label: "mongodb", icon: "devicon-mongodb-plain" },
  { label: "mysql", icon: "devicon-mysql-plain" },
  { label: "postgresql", icon: "devicon-postgresql-plain" },
  { label: "photoshop", icon: "devicon-photoshop-plain" },
  { label: "php", icon: "devicon-php-plain" },
  { label: "ruby", icon: "devicon-ruby-plain" },
  { label: "rails", icon: "devicon-rails-plain" },
  { label: "react", icon: "devicon-react-plain" },
  { label: "redux", icon: "devicon-redux-plain" },
];

const Skills = ({ skillsRef }) => {
  return (
    <StyledWrapper ref={skillsRef}>
      <Content className="active">
        <Title>Skills</Title>
        <SkillsContainer>
          {skillData.map((skill, index) => {
            return <Skill key={index} skill={skill} />;
          })}
        </SkillsContainer>
      </Content>
    </StyledWrapper>
  );
};

export default Skills;
