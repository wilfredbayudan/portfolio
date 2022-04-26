import React from "react";
import Splash from "../components/Splash";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Main = ({
  refsObject: { projectsRef, skillsRef, splashRef, contactRef },
}) => {
  return (
    <div>
      <Splash splashRef={splashRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} />
      <Skills skillsRef={skillsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Main;
