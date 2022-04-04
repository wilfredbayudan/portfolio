import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Logo from "../assets/images/logo.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MobileNav from "./MobileNav";
import { useDispatch, useSelector } from "react-redux";
import useIntersection from "../hooks/useIntersection";
import { setTheme } from "../features/themeSlice";
import { useNavigate, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  background-color: #ffffff;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const NavBar = styled.nav`
  border-bottom: 1px solid #e5e5e5;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    height: 80px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 5px;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 15px;
  }

  img {
    height: 100%;
  }
  span {
    display: none;
    font-family: "Bebas Neue", cursive;
    font-size: 2.5em;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const NavLinks = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  padding-right: 10px;
  @media (min-width: 768px) {
    padding-right: 15px;
  }
`;

const FullNav = styled.ul`
  margin: 0;
  height: 100%;
  display: none;
  @media (min-width: 768px) {
    display: inline-flex;
  }
  .current {
    border-bottom: 2px solid #00ceb3;
  }
`;

const Link = styled.li`
  list-style-type: none;
  cursor: pointer;
  margin: 0 20px;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  transition: all 150ms linear;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  &:hover {
    border-bottom: 2px solid #00ceb3;
  }
`;

const ContactBtn = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  padding: 7px;
  border-radius: 6px;
  border: none;
  background-color: #00ceb3;
  color: #000000;
  font-weight: 500;
  cursor: pointer;
  transition: all 150ms linear;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-left: 15px;
  &:hover {
    background-color: #24dac2;
  }
  span {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: #24dac2;
    `}
`;

const StyledMailIcon = styled(MailOutlineIcon)``;

const Header = ({ projectsRef, skillsRef, splashRef, contactRef }) => {
  const [currentPage, setCurrentPage] = useState("home");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inSplash = useIntersection(splashRef, "-3%");
  const inProjects = useIntersection(projectsRef, "-15%");
  const inSkills = useIntersection(skillsRef, "-15%");
  const inContact = useIntersection(contactRef, "-15%");

  const theme = useSelector((state) => state.theme.style);

  const location = useLocation();

  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }
  };

  console.log(theme);

  useEffect(() => {
    if (inSplash) setCurrentPage("home");
    if (inProjects) setCurrentPage("projects");
    if (inSkills) setCurrentPage("skills");
    if (inContact) setCurrentPage("contact");
    if (location.pathname === "/resume") setCurrentPage("resume");
  }, [inProjects, inSkills, inSplash, inContact]);

  const scrollToRef = (ref, label) => {
    setCurrentPage(label);
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }, 1);
  };

  return (
    <HeaderWrapper>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Wilfred Bayudan" />
          <span>AYUDAN</span>
        </LogoContainer>
        <NavLinks>
          <FullNav>
            <Link
              className={currentPage === "home" ? "current" : ""}
              onClick={() => {
                navigate("/");
                scrollToRef(splashRef, "home");
              }}
            >
              Home
            </Link>
            <Link
              className={currentPage === "projects" ? "current" : ""}
              onClick={() => {
                navigate("/");
                scrollToRef(projectsRef, "projects");
              }}
            >
              Work
            </Link>
            <Link
              className={currentPage === "skills" ? "current" : ""}
              onClick={() => {
                navigate("/");
                scrollToRef(skillsRef, "skills");
              }}
            >
              Skills
            </Link>
            <Link
              className={currentPage === "resume" ? "current" : ""}
              onClick={() => {
                setCurrentPage("resume");
                navigate("/resume");
              }}
            >
              Resume
            </Link>
            {/* <Link onClick={toggleTheme} className="theme">
              {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </Link> */}
          </FullNav>
          <ContactBtn
            selected={currentPage === "contact"}
            onClick={() => {
              navigate("/");
              scrollToRef(contactRef, "contact");
            }}
          >
            <StyledMailIcon /> <span>Contact</span>
          </ContactBtn>
          <MobileNav
            scrollToRef={scrollToRef}
            splashRef={splashRef}
            projectsRef={projectsRef}
            skillsRef={skillsRef}
            contactRef={contactRef}
          />
        </NavLinks>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
