import React, { useRef } from "react";
import styled from "styled-components";
import useIntersection from "../hooks/useIntersection";

const SkillContainer = styled.div`
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
  @media (min-width: 1200px) {
    width: 16%;
  }
`;

const SkillIcon = styled.i``;

const Skill = ({ skill: { label, icon } }) => {
  const ref = useRef();

  const inViewport = useIntersection(ref, "-15%");

  console.log(`${label} - ${inViewport}`);

  return (
    <SkillContainer ref={ref} className={inViewport ? "active" : ""}>
      <SkillIcon className={icon}></SkillIcon>
      <span>{label}</span>
    </SkillContainer>
  );
};

export default Skill;
