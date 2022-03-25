import React, { useState } from "react";
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
    color: #00ceb3;
    border-bottom: 3px solid #00ceb3;
  }

  .current {
    li {
      color: #00ceb3;
      font-weight: 400;
      border-bottom: 3px solid #00ceb3;
    }
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

const Header = ({ projectsRef, skillsRef, splashRef }) => {
  const [showNav, setShowNav] = useState(false);

  const scrollToSplash = () => {
    setTimeout(() => {
      splashRef.current.scrollIntoView({ behavior: "smooth" });
    }, 1);
  };

  const scrollToProjects = () => {
    setTimeout(() => {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }, 1);
  };

  const scrollToSkills = () => {
    setTimeout(() => {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
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
        <ListItem button onClick={scrollToSplash}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={scrollToProjects}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>
        <ListItem button onClick={scrollToSkills}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Skills"} />
        </ListItem>
        {/* <ListItem button onClick={() => navigate("/how")}>
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary={"How It Works"} />
        </ListItem>
        <ListItem button onClick={() => navigate("/about")}>
          <ListItemIcon> 
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"About Us"} />
        </ListItem> */}
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
            <LinkItem onClick={scrollToSplash}>Home</LinkItem>
            <LinkItem onClick={scrollToProjects}>Projects</LinkItem>
            <LinkItem onClick={scrollToSkills}>Skills</LinkItem>
            <LinkItem>Resume</LinkItem>
            <LinkItem>Contact</LinkItem>
          </Links>
        </Full>
      </Nav>
    </HeaderBar>
  );
};

export default Header;
