import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Title } from "../styles/Content";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

const Form = styled.form`
  width: 100%;
  padding: 20px;
  background-color: ;
  @media (min-width: 768px) {
    padding: 40px;
    border-left: 6px solid #ececec;
  }
  margin: 0;

  .btn {
    background-color: #64d5c6;
    float: right;
    color: #3e3e3e;
    width: 100%;
    @media (min-width: 768px) {
      width: auto;
    }
  }
  .btn:hover {
    background-color: #96e2d8;
  }
`;

const StyledTextField = styled(TextField)``;

const FormInput = styled.div`
  margin-bottom: 20px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form>
      <Title>Contact Me</Title>
      <FormInput>
        <StyledTextField
          fullWidth
          name="name"
          label="Name"
          variant="filled"
          onChange={handleChange}
          value={formData.name}
        />
      </FormInput>
      <FormInput>
        <StyledTextField
          fullWidth
          name="email"
          label="Email"
          variant="filled"
          onChange={handleChange}
          value={formData.email}
        />
      </FormInput>
      <FormInput>
        <StyledTextField
          fullWidth
          name="message"
          label="Message"
          variant="filled"
          multiline
          rows={4}
          onChange={handleChange}
          value={formData.message}
        />
      </FormInput>
      <LoadingButton
        type="submit"
        disableElevation
        className="btn"
        variant="contained"
      >
        Submit
      </LoadingButton>
    </Form>
  );
};

export default ContactForm;
