import React from "react";

const Skills = ({ skillsRef }) => {
  console.log(skillsRef);
  return <div ref={skillsRef}>Skills</div>;
};

export default Skills;
