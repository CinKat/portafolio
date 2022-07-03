import Navbar from "./components/Navbar";
import React from 'react';
import Inicio from "../src/pages/Inicio";
import Acerca from "../src/pages/Acerca"
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Navigate to="/inicio" />} />
          <Route path="*" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
