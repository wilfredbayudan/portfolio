import { useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import EngineeringIcon from "@mui/icons-material/Engineering";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";

const NavIcon = styled(MenuIcon)`
  cursor: pointer;
`;

const NavContainer = styled.div`
  margin-left: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = ({
  scrollToRef,
  splashRef,
  projectsRef,
  skillsRef,
  contactRef,
  handleResumeClick,
}) => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();

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
        <ListItem
          button
          onClick={() => {
            navigate("/");
            scrollToRef(splashRef, "home");
          }}
        >
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
        <ListItem button onClick={handleResumeClick}>
          <ListItemIcon>
            <ArticleIcon />
          </ListItemIcon>
          <ListItemText primary={"Resume"} />
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
    <NavContainer>
      <NavIcon onClick={toggleDrawer(true)} fontSize="large" />
      <SwipeableDrawer
        anchor="top"
        open={showNav}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </NavContainer>
  );
};

export default MobileNav;
