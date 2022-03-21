import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<>Projects, Skills</>} />
        <Route path="resume" element={<>Resume</>} />
        <Route path="contact" element={<>Contact</>} />
        <Route path="*" element={<>404</>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
