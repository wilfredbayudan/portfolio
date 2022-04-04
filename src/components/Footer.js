import React from "react";
import styled from "styled-components";
import { StyledIconButton } from "../styles/Content";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";

const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
  background-color: #22272e;
  color: #e3e3e3;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative;
  bottom: 50px; */
  padding: 0 20px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Socials = styled.div`
  button {
    color: #e3e3e3;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>Copyright&copy; 2022 Wilfred Bayudan</Copyright>
      <Socials>
        <Tooltip title="GitHub" arrow>
          <StyledIconButton
            onClick={() => window.open("https://github.com/wilfredbayudan")}
          >
            <GitHubIcon />
          </StyledIconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" arrow>
          <StyledIconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/wilfred-bayudan-3b5044224/"
              )
            }
          >
            <LinkedInIcon />
          </StyledIconButton>
        </Tooltip>
      </Socials>
    </StyledFooter>
  );
};

export default Footer;
