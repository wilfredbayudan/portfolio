import React from "react";
import styled from "styled-components";
import { Wrapper, Content, Title } from "../styles/Content";

const Skills = ({ skillsRef }) => {
  console.log(skillsRef);
  return (
    <Wrapper ref={skillsRef}>
      <Content className="active">
        <Title>Skills</Title>
      </Content>
    </Wrapper>
  );
};

export default Skills;
