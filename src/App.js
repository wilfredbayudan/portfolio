import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Home from "./pages/Home";

const Wrapper = styled.div`
  background-color: red;
  height: 100vh;
  width: 100%;
  max-width: 2600px;
  margin: 0 auto 0 auto;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Wrapper>
        <Routes>
          <Route index element={<Home />} />
          <Route path="resume" element={<>Resume</>} />
          <Route path="contact" element={<>Contact</>} />
          <Route path="*" element={<>404</>} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
