import React from "react";
import styled from "styled-components";
import { Wrapper, Content, Title } from "../styles/Content";

const StyledWrapper = styled(Wrapper)`
  background-color: #22272e;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Skill = styled.div`
  background: none;
  color: #b2b2b2;
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 10px;
  transition: 20ms ease-in-out;
  i {
    font-size: 10em;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 0;
    transition: all 100ms ease-in-out;
  }
  span {
    border-top: 6px solid #b2b2b2;
    padding-top: 10px;
    padding-bottom: 0;
    font-weight: bold;
    margin-top: 10px;
    transition: all 100ms ease-in-out;
  }
  &:hover {
    background: #33e5ce;
    color: #3c3c3c;
    i {
      margin-top: 20px;
      margin-bottom: 0;
    }
    span {
      border-top: none;
      border-bottom: 6px solid #3c3c3c;
      padding-top: 0;
      padding-bottom: 10px;
      font-weight: bold;
    }
  }
  @media (min-width: 768px) {
    width: 33%;
  }
  @media (min-width: 1028px) {
    width: 25%;
  }
  @media (min-width: 1152px) {
    width: 16%;
  }
`;

const SkillIcon = styled.i``;

const Skills = ({ skillsRef }) => {
  console.log(skillsRef);
  return (
    <StyledWrapper ref={skillsRef}>
      <Content className="active">
        <Title>Skills</Title>
        <SkillsContainer>
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>
          <Skill>
            <SkillIcon className="devicon-css3-plain"></SkillIcon>
            <span>CSS 3</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>{" "}
          <Skill>
            <SkillIcon className="devicon-html5-plain"></SkillIcon>
            <span>HTML 5</span>
          </Skill>
        </SkillsContainer>
      </Content>
    </StyledWrapper>
  );
};

export default Skills;