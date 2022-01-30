import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditComp from "./Component/Class/EditComp";
import About from "./Component/Fungsional/AboutComp";
import DetailComp from "./Component/Fungsional/DetailComp";
import HomePage from "./Component/Fungsional/HomePage";
import ListComp from "./Component/Fungsional/ListComp";
import NavbarComp from "./Component/Fungsional/NavbarComp";
import TambahComp from "./Component/Fungsional/TambahComp";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/mahasiswa" element={<ListComp />} />
        <Route exact path="/mahasiswa/tambah" element={<TambahComp />} />
        <Route
          exact
          path="/mahasiswa/edit/:id_mahasiswa"
          element={<EditComp />}
        />
        <Route exact path="/detail/:id" element={<DetailComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
