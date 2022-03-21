import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { clear } from "../features/loaderSlice";

const LoaderContainer = styled.div`
  position: fixed;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 4px;
  z-index: 9999999999;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid #a9f2e8;
  border-radius: 50%;
  border-top: 4px solid #00ceb3;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const StatusSpan = styled.span`
  margin-top: 10px;
  color: #1a1a1a;
  font-size: 0.9em;
`;

const HideBtn = styled.button`
  position: absolute;
  margin-right: -70%;
  background: none;
  border: none;
  color: #7b7b7b;
  font-size: 0.7em;
  &:hover {
    color: #00ceb3;
    cursor: pointer;
  }
`;

const LoaderOverlay = () => {
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  const handleHideClick = () => {
    dispatch(clear());
  };

  if (loader.status) {
    return (
      <LoaderContainer>
        <Spinner />
        <HideBtn onClick={handleHideClick}>Hide</HideBtn>
        <StatusSpan>
          Spinning up Heroku, <br />
          this may take a moment!
        </StatusSpan>
      </LoaderContainer>
    );
  } else {
    return null;
  }
};

export default LoaderOverlay;
