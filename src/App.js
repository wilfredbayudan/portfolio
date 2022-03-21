import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      Navbar
      <Routes>
        <Route index element={<>Projects, Skills</>} />
        <Route to="/resume" element={<>Resume</>} />
        <Route to="/contact" element={<>Contact</>} />
      </Routes>
      Main Content Footer
    </BrowserRouter>
  );
};

export default App;
