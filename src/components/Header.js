import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImg from "../assets/images/logo.png";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import useIntersection from "../hooks/useIntersection";
import EmailIcon from "@mui/icons-material/Email";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const HeaderBar = styled.header`
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 10;
  text-align: center;
`;

const Nav = styled.nav`
  max-width: 2600px;
  margin: 0 auto;
`;

const NavIcon = styled(MenuIcon)`
  cursor: pointer;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 10px;
  padding: 2px;
  &:hover {
    color: #00ceb3;
  }
`;

const Mobile = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
  text-align: right;
`;

const Logo = styled.img`
  height: 100%;
`;

const Links = styled.ul`
  display: inline-flex;
  gap: 30px;
  margin-right: 20px;
  position: relative;
  top: 6px;

  li {
    color: #1a1a1a;
    font-weight: 350;
    margin: 2px 10px 0 10px;
    font-size: 1.1em;
    list-style: none;
    border-bottom: 3px solid #ffffff;
    padding-bottom: 8px;
    /* text-transform: uppercase; */
    cursor: pointer;
    transition: all 150ms ease-in-out;
  }

  li:hover {
    color: #30d1bc;
  }

  li.current {
    color: #30d1bc;
    font-weight: 400;
    border-bottom: 3px solid #30d1bc;
  }
`;

const LinkItem = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap");
  font-family: "Urbanist", sans-serif;
  list-style-type: none;
  font-size: 1rem;
  /* text-transform: uppercase; */
`;

const Full = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    height: 60px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Header = ({ projectsRef, skillsRef, splashRef, contactRef }) => {
  const [showNav, setShowNav] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const inSplash = useIntersection(splashRef, "-3%");
  const inProjects = useIntersection(projectsRef, "-15%");
  const inSkills = useIntersection(skillsRef, "-15%");
  const inContact = useIntersection(contactRef, "-15%");

  useEffect(() => {
    if (inSplash) setCurrentPage("home");
    if (inProjects) setCurrentPage("projects");
    if (inSkills) setCurrentPage("skills");
    if (inContact) setCurrentPage("contact");
  }, [inProjects, inSkills, inSplash, inContact]);

  const scrollToRef = (ref, label) => {
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setCurrentPage(label), 500);
    }, 1);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShowNav(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* <ListItem button onClick={() => navigate("/")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem> */}
        <ListItem button onClick={() => scrollToRef(splashRef, "home")}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={() => scrollToRef(projectsRef, "projects")}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
        <ListItem button onClick={() => scrollToRef(skillsRef, "skills")}>
          <ListItemIcon>
            <EngineeringIcon />
          </ListItemIcon>
          <ListItemText primary={"Skills"} />
        </ListItem>
        <ListItem button onClick={() => scrollToRef(contactRef, "contact")}>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary={"Contact"} />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <HeaderBar>
      <Nav>
        <Mobile>
          <NavIcon onClick={toggleDrawer(true)} fontSize="large" />
          <SwipeableDrawer
            anchor="top"
            open={showNav}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </Mobile>
        <Full>
          <Logo src={LogoImg} alt="WB Logo" />
          <Links>
            <LinkItem
              className={currentPage === "home" ? "current" : ""}
              onClick={() => scrollToRef(splashRef, "home")}
            >
              Home
            </LinkItem>
            <LinkItem
              className={currentPage === "projects" ? "current" : ""}
              onClick={() => scrollToRef(projectsRef, "projects")}
            >
              Projects
            </LinkItem>
            <LinkItem
              className={currentPage === "skills" ? "current" : ""}
              onClick={() => scrollToRef(skillsRef, "skills")}
            >
              Skills
            </LinkItem>
            <LinkItem>Resume</LinkItem>
            <LinkItem
              className={currentPage === "contact" ? "current" : ""}
              onClick={() => scrollToRef(contactRef, "contact")}
            >
              Contact
            </LinkItem>
            <LinkItem>
              <DarkModeIcon />
            </LinkItem>
          </Links>
        </Full>
      </Nav>
    </HeaderBar>
  );
};

export default Header;
