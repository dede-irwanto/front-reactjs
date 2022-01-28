import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Component/Fungsional/AboutComp";
import DetailComp from "./Component/Fungsional/DetailComp";
import HomePage from "./Component/Fungsional/HomePage";
import NavbarComp from "./Component/Fungsional/NavbarComp";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:id" element={<DetailComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
