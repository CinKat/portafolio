import Navbar from "./components/Navbar";
import React from 'react';
import Inicio from "../src/pages/Inicio";
import Acerca from "../src/pages/Acerca";
import Portafolio from "./pages/Portafolio";
import Contacto from "../src/pages/Contacto";

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
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

