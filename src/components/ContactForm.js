import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Title } from "../styles/Content";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";

const ContactTitle = styled(Title)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Form = styled.form`
  width: 100%;
  padding: 5px 15px 20px 15px;
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

const ContactForm = ({
  inViewport,
  sendMessage,
  loading,
  formData,
  setFormData,
  additionalMsg,
}) => {
  const nameRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      message: "",
    });
    sendMessage(formData);
  };

  const resumeDisplay = useSelector((state) => state.resume.display);

  const [viewed, setViewed] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (resumeDisplay) {
      setViewed(true);
    }
  }, [resumeDisplay]);

  const viewedClosed = !resumeDisplay && viewed;

  useEffect(() => {
    let timeout;
    if (viewedClosed) {
      timeout = setTimeout(() => {
        console.log("FOCUS!");
        nameRef.current.focus();
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [viewedClosed]);

  return (
    <Form className={inViewport ? "active" : ""} onSubmit={handleSubmit}>
      <ContactTitle>Contact</ContactTitle>
      <FormInput>
        <StyledTextField
          fullWidth
          inputRef={nameRef}
          name="name"
          label="Name"
          disabled={loading}
          variant="filled"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </FormInput>
      <FormInput>
        <StyledTextField
          fullWidth
          name="email"
          label="Email"
          disabled={loading}
          variant="filled"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </FormInput>
      <FormInput>
        <StyledTextField
          fullWidth
          name="message"
          disabled={loading}
          label="Message"
          variant="filled"
          multiline
          rows={4}
          onChange={handleChange}
          value={formData.message}
          autoFocus={additionalMsg}
          required
        />
      </FormInput>
      <LoadingButton
        type="submit"
        loading={loading}
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
