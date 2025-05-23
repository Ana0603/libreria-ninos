import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";
import CatalogoLibros from "./views/CatalogoLibros";
import PaginaLibro from "./views/PaginaLibro";
import Contacto from "./components/Contacto";
import Landing_Autores from "./views/Landing_Autores";
import RutaPrivada from "./components/RutaPrivada";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <BrowserRouter>
      {usuario && <Header />}

      <main>
        <Routes>
          {/* Ruta pública de login */}
          <Route path="/login" element={<Login onLogin={setUsuario} />} />

          {/* Rutas privadas protegidas */}
          <Route
            path="/"
            element={
              <RutaPrivada usuario={usuario}>
                <p>Bienvenido, {usuario} 😊</p>
              </RutaPrivada>
            }
          />

          <Route
            path="/libros"
            element={
              <RutaPrivada usuario={usuario}>
                <CatalogoLibros />
              </RutaPrivada>
            }
          />

          <Route
            path="/libros/:id"
            element={
              <RutaPrivada usuario={usuario}>
                <PaginaLibro />
              </RutaPrivada>
            }
          />

          <Route
            path="/autores"
            element={
              <RutaPrivada usuario={usuario}>
                <Landing_Autores />
              </RutaPrivada>
            }
          />

          <Route
            path="/contacto"
            element={
              <RutaPrivada usuario={usuario}>
                <Contacto />
              </RutaPrivada>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
