import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Title } from "../styles/Content";

const Form = styled.form`
  width: 100%;
  height: 500px;
  padding: 20px;
  background-color: #f7f7f7;
  @media (min-width: 1152px) {
    padding: 40px;
    border-left: 6px solid #ececec;
  }
  margin: 0;
`;

const ContactForm = () => {
  return (
    <Form>
      <Title>Contact Me</Title>
    </Form>
  );
};

export default ContactForm;
