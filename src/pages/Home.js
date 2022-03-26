import React from "react";
import Splash from "../components/Splash";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = ({ projectsRef, skillsRef, splashRef }) => {
  return (
    <div>
      <Splash splashRef={splashRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
    </div>
  );
};

export default Home;
