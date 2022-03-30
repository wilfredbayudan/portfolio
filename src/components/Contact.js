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

const StyledWrapper = styled(Wrapper)`
  padding-top: 0;
  padding-bottom: 0;
  overflow: hidden;
  h4 {
    opacity: 0;
    transform: scale(1, 0);
    transition: all 0.5s ease-in-out;
  }
  h4.active {
    opacity: 1;
    transform: scale(1, 1);
  }

  form {
    opacity: 0;
    position: relative;
    right: -200px;
    transition: all 0.5s ease-in-out 0.4s;
  }
  form.active {
    opacity: 1;
    right: 0;
  }
`;

const H4 = styled.h4`
  text-align: center;
  margin: 40px 0;
  padding: 0;
  font-size: 4em;
  color: #434343;
  min-width: 50%;
  line-height: 1em;
  @media (min-width: 768px) {
    font-size: 5em;
  }
  span {
    color: #30d1bc;
  }
`;

const Contact = ({ contactRef }) => {
  const textRef = useRef();
  const formRef = useRef();

  const inContacts = useIntersection(contactRef, "-15%");

  // const inViewport = useIntersection(contactRef, "-15%");

  return (
    <StyledWrapper ref={contactRef}>
      <StyledContent className="active">
        <H4 className={inContacts ? "active" : ""}>
          Let's <span>build</span> something.
        </H4>
        <ContactForm inViewport={inContacts} />
      </StyledContent>
    </StyledWrapper>
  );
};

export default Contact;
