import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MobileNav from "./MobileNav";

// const HeaderBar = styled.header`
//   height: 50px;
//   width: 100%;
//   position: fixed;
//   z-index: 10;
//   text-align: center;
// `;

// const Nav = styled.nav`
//   max-width: 2600px;
//   margin: 0 auto;
//   transition: all 1s ease-in-out;
//   div#full {
//     display: none;
//     @media (min-width: 768px) {
//       display: block;
//       height: 60px;
//       background-color: #ffffff;
//       transition: all 1s ease-in-out;
//       padding: 5px;
//       box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//         rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//     }
//   }
//   div#full.dark {
//     background-color: #000000;
//   }
// `;

// const NavIcon = styled(MenuIcon)`
//   cursor: pointer;
//   color: #ffffff;
//   background: rgba(0, 0, 0, 0.25);
//   border-radius: 10px;
//   margin: 10px;
//   padding: 2px;
//   &:hover {
//     color: #00ceb3;
//   }
// `;

// const Mobile = styled.div`
//   display: block;
//   @media (min-width: 768px) {
//     display: none;
//   }
//   text-align: right;
// `;

// const Logo = styled.img`
//   height: 100%;
// `;

// const Links = styled.ul`
//   display: inline-flex;
//   gap: 30px;
//   margin-right: 20px;
//   position: relative;
//   top: 6px;

//   li {
//     color: #1a1a1a;
//     font-weight: 350;
//     margin: 2px 10px 0 10px;
//     font-size: 1.1em;
//     list-style: none;
//     border-bottom: 3px solid #ffffff;
//     padding-bottom: 8px;
//     /* text-transform: uppercase; */
//     cursor: pointer;
//     transition: all 150ms ease-in-out;
//   }

//   li:hover {
//     color: #30d1bc;
//   }

//   li.current {
//     color: #30d1bc;
//     font-weight: 400;
//     border-bottom: 3px solid #30d1bc;
//   }

//   .theme {
//     margin: 0;
//   }
// `;

// const LinkItem = styled.li`
//   @import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@100&display=swap");
//   font-family: "Urbanist", sans-serif;
//   list-style-type: none;
//   font-size: 1rem;
//   /* text-transform: uppercase; */
// `;

// const Full = styled.div``;

// const Header = ({ projectsRef, skillsRef, splashRef, contactRef }) => {
//   const [showNav, setShowNav] = useState(false);
//   const [currentPage, setCurrentPage] = useState("home");
//   const dispatch = useDispatch();

//   const inSplash = useIntersection(splashRef, "-3%");
//   const inProjects = useIntersection(projectsRef, "-15%");
//   const inSkills = useIntersection(skillsRef, "-15%");
//   const inContact = useIntersection(contactRef, "-15%");

//   const theme = useSelector((state) => state.theme.style);

//   const toggleTheme = () => {
//     if (theme === "light") {
//       dispatch(setTheme("dark"));
//     } else {
//       dispatch(setTheme("light"));
//     }
//   };

//   console.log(theme);

//   useEffect(() => {
//     if (inSplash) setCurrentPage("home");
//     if (inProjects) setCurrentPage("projects");
//     if (inSkills) setCurrentPage("skills");
//     if (inContact) setCurrentPage("contact");
//   }, [inProjects, inSkills, inSplash, inContact]);

//   const scrollToRef = (ref, label) => {
//     setTimeout(() => {
//       ref.current.scrollIntoView({
//         behavior: "smooth",
//       });
//       setTimeout(() => setCurrentPage(label), 500);
//     }, 1);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event &&
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setShowNav(open);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: "auto" }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {/* <ListItem button onClick={() => navigate("/")}>
//           <ListItemIcon>
//             <HomeIcon />
//           </ListItemIcon>
//           <ListItemText primary={"Home"} />
//         </ListItem> */}
//         <ListItem button onClick={() => scrollToRef(splashRef, "home")}>
//           <ListItemIcon>
//             <HomeIcon />
//           </ListItemIcon>
//           <ListItemText primary={"Home"} />
//         </ListItem>
//         <ListItem button onClick={() => scrollToRef(projectsRef, "projects")}>
//           <ListItemIcon>
//             <MenuBookIcon />
//           </ListItemIcon>
//           <ListItemText primary={"Projects"} />
//         </ListItem>
//         <ListItem button onClick={() => scrollToRef(skillsRef, "skills")}>
//           <ListItemIcon>
//             <EngineeringIcon />
//           </ListItemIcon>
//           <ListItemText primary={"Skills"} />
//         </ListItem>
//         <ListItem button onClick={() => scrollToRef(contactRef, "contact")}>
//           <ListItemIcon>
//             <EmailIcon />
//           </ListItemIcon>
//           <ListItemText primary={"Contact"} />
//         </ListItem>
//       </List>
//       <Divider />
//     </Box>
//   );

//   return (
//     <HeaderBar>
//       <Nav>
//         <Mobile>
//           <NavIcon onClick={toggleDrawer(true)} fontSize="large" />
//           <SwipeableDrawer
//             anchor="top"
//             open={showNav}
//             onClose={toggleDrawer(false)}
//             onOpen={toggleDrawer(true)}
//           >
//             {list()}
//           </SwipeableDrawer>
//         </Mobile>
//         <Full id="full" className={theme === "dark" ? "dark" : ""}>
//           <Logo src={LogoImg} alt="WB Logo" />
//           <Links>
//             <LinkItem
//               className={currentPage === "home" ? "current" : ""}
//               onClick={() => scrollToRef(splashRef, "home")}
//             >
//               Home
//             </LinkItem>
//             <LinkItem
//               className={currentPage === "projects" ? "current" : ""}
//               onClick={() => scrollToRef(projectsRef, "projects")}
//             >
//               Projects
//             </LinkItem>
//             <LinkItem
//               className={currentPage === "skills" ? "current" : ""}
//               onClick={() => scrollToRef(skillsRef, "skills")}
//             >
//               Skills
//             </LinkItem>
//             {/* <LinkItem>Resume</LinkItem> */}
//             <LinkItem
//               className={currentPage === "contact" ? "current" : ""}
//               onClick={() => scrollToRef(contactRef, "contact")}
//             >
//               Contact
//             </LinkItem>
//             {/* <LinkItem onClick={toggleTheme} className="theme">
//               {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//             </LinkItem> */}
//           </Links>
//         </Full>
//       </Nav>
//     </HeaderBar>
//   );
// };

// export default Header;

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
`;

const Link = styled.li`
  list-style-type: none;
  margin: 0 20px;
  height: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  transition: all 150ms linear;
  a,
  button {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0);
    cursor: pointer;
    font-size: 1rem;
    background: none;
  }
  .isActive,
  a:hover,
  button:hover {
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
`;

const StyledMailIcon = styled(MailOutlineIcon)``;

const Header = () => {
  return (
    <HeaderWrapper>
      <NavBar>
        <LogoContainer>
          <img src={Logo} alt="Wilfred Bayudan" />
          <span>AYUDAN</span>
        </LogoContainer>
        <NavLinks>
          <FullNav>
            <Link>
              <button>Work</button>
            </Link>
            <Link>
              <button>Skills</button>
            </Link>
          </FullNav>
          <ContactBtn>
            <StyledMailIcon /> <span>Contact</span>
          </ContactBtn>
          <MobileNav />
        </NavLinks>
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;
