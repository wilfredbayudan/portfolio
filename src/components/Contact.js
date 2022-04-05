import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper, Content } from "../styles/Content";
import useIntersection from "../hooks/useIntersection";
import ContactForm from "./ContactForm";
import LoadingButton from "@mui/lab/LoadingButton";

const StyledContent = styled(Content)`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  padding: 0;
`;

const StyledWrapper = styled(Wrapper)`
  padding-top: 0;
  padding-bottom: 0;
  height: 100vh;
  max-height: 1400px;
  display: flex;
  align-items: center;
  overflow: hidden;
  h4 {
    opacity: 0;
    transform: scale(1, 0);
    transition: all 0.5s ease-in-out 400ms;
  }
  h4.active {
    opacity: 1;
    transform: scale(1, 1);
  }

  form {
    opacity: 0;
    position: relative;
    right: -200px;
    transition: all 0.5s ease-in-out 800ms;
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
  width: 100%;
  line-height: 1em;
  @media (min-width: 768px) {
    font-size: 5em;
  }
  span {
    color: #30d1bc;
  }
`;

const SuccessDiv = styled.div`
  text-align: center;

  .btn {
    background-color: #64d5c6;
    color: #3e3e3e;
    @media (min-width: 768px) {
    }
  }
  .btn:hover {
    background-color: #96e2d8;
  }
`;

const Contact = ({ contactRef }) => {
  const [submitted, setSubmitted] = useState(false);
  const [additionalMsg, setAdditionalMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inContacts = useIntersection(contactRef, "-15%");

  const sendMessage = (dataObj) => {
    const sendDataObj = new FormData();
    Object.keys(dataObj).forEach((inputName) => {
      sendDataObj.append(inputName, dataObj[inputName]);
    });
    setLoading(true);
    fetch("https://wbayudan.com/api/contact.php", {
      method: "POST",
      body: sendDataObj,
    })
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        if (json.status) {
          setSubmitted(true);
        }
      });
  };

  const handleNextMsg = () => {
    setAdditionalMsg(true);
    setSubmitted(false);
  };

  // const inViewport = useIntersection(contactRef, "-15%");

  return (
    <StyledWrapper ref={contactRef}>
      <StyledContent className="active">
        {submitted ? (
          <SuccessDiv>
            <H4 className={submitted ? "active" : ""}>
              Thank you for <span>connecting!</span>
            </H4>
            <LoadingButton
              disableElevation
              className="btn"
              variant="contained"
              onClick={handleNextMsg}
            >
              Send Another
            </LoadingButton>
          </SuccessDiv>
        ) : (
          <>
            <H4 className={inContacts ? "active" : ""}>
              Let's <span>build</span> something.
            </H4>
            <ContactForm
              additionalMsg={additionalMsg}
              sendMessage={sendMessage}
              inViewport={inContacts}
              loading={loading}
              formData={formData}
              setFormData={setFormData}
            />
          </>
        )}
      </StyledContent>
    </StyledWrapper>
  );
};

export default Contact;
