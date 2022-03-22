import React from "react";
import Splash from "../components/Splash";
import Projects from "../components/Projects";

const Home = ({ projectsRef }) => {
  return (
    <div>
      <Splash />
      <Projects projectsRef={projectsRef} />
    </div>
  );
};

export default Home;
