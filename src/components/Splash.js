import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SplashBackground from "../assets/images/splash.jpg";

const Header = styled.div`
  height: 100vh;
  max-height: 1400px;
  max-width: 2600px;
  width: 100%;
  margin: auto;
  div#splash {
    /* background-color: #ffffff; */
    color: #000000;
    position: absolute;
    height: 100vh;
    max-height: 1400px;
    width: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s ease-in;
  }
  div#splash.dark {
    /* background-color: #0e0e0e; */
    /* background-image: url(${SplashBackground}); */
  }

  div#bg-cover {
    width: 100%;
    height: 100vh;
    max-height: 1400px;
    position: absolute;
    background-color: #ffffff;
    max-width: 2600px;
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  div#bg-cover.dark {
    opacity: 0;
  }

  div#bg-image {
    width: 100%;
    max-width: 2600px;
    height: 100vh;
    max-height: 1400px;
    position: absolute;
    background-image: url(${SplashBackground});
    background-position: center center;
    background-size: cover;
    z-index: 1;
  }
`;

const Wrapper = styled.div`
  max-width: 2600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    opacity: 0;
    transform: scale(1, 0);
    transition: all 0.5s ease-in-out;
  }
  div.active {
    margin-top: 0;
    opacity: 1;
    transform: scale(1, 1);
  }
  div.active.dark {
    background: rgba(0, 0, 0, 0.45);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-bottom: 5%;
  width: 100%;
  padding: 20px 30px;

  h1 {
    font-family: "Aguafina Script", cursive;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 6rem;
    line-height: 5rem;
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: center;
    @media (min-width: 1200px) {
    }
    transition: all 0.3s linear;
  }

  h1.active {
    color: #000000;
    transition: all 0.5s ease-in-out;
  }

  h1.active.dark {
    color: #fcfcfc;
  }

  h3 {
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    margin-top: 0;
    letter-spacing: 8px;
    font-weight: normal;
  }

  h3.active {
    text-transform: uppercase;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  h3.active.dark {
    color: #ffffff;
  }

  span {
    opacity: 0;
    text-transform: uppercase;
    margin-left: 0;
    letter-spacing: 4px;
    transition: all 0.5s ease-in;
  }

  span.active {
    opacity: 1;
    margin-left: 0;
    letter-spacing: 2px;
    font-weight: 300;
    transition: all 0.5s ease-in-out;
  }

  span.active.dark {
    color: #ffffff;
  }

  span.active.dark b {
    color: #61ebf5;
  }
`;

const Splash = ({ splashRef }) => {
  const [showContent, setShowContent] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSlogan, setShowSlogan] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const contentTimeout = setTimeout(() => setShowContent(true), 500);
    const titleTimeout = setTimeout(() => setShowTitle(true), 1200);
    const sloganTimeout = setTimeout(() => setShowSlogan(true), 1800);
    const darkModeTimeout = setTimeout(() => setDarkMode(true), 1800);

    return () => {
      clearTimeout(contentTimeout);
      clearTimeout(titleTimeout);
      clearTimeout(sloganTimeout);
      clearTimeout(darkModeTimeout);
    };
  }, []);

  return (
    <Header ref={splashRef}>
      <img src={SplashBackground} alt="Splash Preload" className="preload" />
      <Wrapper id="splash" className={darkMode ? "dark" : ""}>
        <Content
          className={`${showContent ? "active" : ""} ${darkMode ? "dark" : ""}`}
        >
          <h1
            className={`${showContent ? "active" : ""} ${
              darkMode ? "dark" : ""
            }`}
          >
            Wilfred Bayudan
          </h1>
          <h3
            className={`${showTitle ? "active" : ""} ${darkMode ? "dark" : ""}`}
          >
            Software Engineer
          </h3>
          <span
            className={`${showSlogan ? "active" : ""} ${
              darkMode ? "dark" : ""
            }`}
          >
            Let's <b>build</b> something.
          </span>
          <br />
          {/* <button onClick={() => { setDarkMode(!darkMode)}}>Toggle Dark Mode</button> */}
        </Content>
      </Wrapper>
      <div id="bg-cover" className={darkMode ? "dark" : ""}></div>
      <div id="bg-image"></div>
    </Header>
  );
};

export default Splash;
