import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
  background-color: #22272e;
  color: #e3e3e3;
  padding: 20px;
`;

const Footer = () => {
  return <StyledFooter>Copyright&copy; 2022 Wilfred Bayudan</StyledFooter>;
};

export default Footer;
