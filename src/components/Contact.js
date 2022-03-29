import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Wrapper, Content } from "../styles/Content";
import useIntersection from "../hooks/useIntersection";
import ContactForm from "./ContactForm";

const StyledContent = styled(Content)`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  padding: 0;
`;

const H4 = styled.h4`
  text-align: center;
  margin: 60px auto 60px auto;
  padding: 0;
  font-size: 4.5em;
  color: #434343;
  min-width: 50%;
  line-height: 1em;
  @media (min-width: 1024px) {
    font-size: 5em;
  }
  span {
    color: #30d1bc;
  }
`;

const Contact = ({ contactRef }) => {
  const textRef = useRef();
  const formRef = useRef();

  // const inViewport = useIntersection(contactRef, "-15%");

  return (
    <Wrapper ref={contactRef}>
      <StyledContent className="active">
        <H4>
          Let's <span>build</span> something.
        </H4>
        <ContactForm />
      </StyledContent>
    </Wrapper>
  );
};

export default Contact;
