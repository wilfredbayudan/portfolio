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
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const NavIcon = styled(MenuIcon)`
  cursor: pointer;
`;

const NavContainer = styled.div`
  margin-left: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);

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
        <ListItem button>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={"Browse Businesses"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary={"Log in"} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AppRegistrationIcon />
          </ListItemIcon>
          <ListItemText primary={"Sign up"} />
        </ListItem>
      </List>
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
