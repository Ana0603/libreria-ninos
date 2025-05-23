import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { AuthContext } from "./context/AuthContext";

import Header from "./components/Header";
import Login from "./components/Login";
import CatalogoLibros from "./views/CatalogoLibros";
import PaginaLibro from "./views/PaginaLibro";
import Contacto from "./components/Contacto";
import Landing_Autores from "./views/Landing_Autores";
import Vista_autor from "./views/Vista_autor";
import RutaPrivada from "./components/RutaPrivada";
import Home from "./views/Home";

function App() {
  const { usuario } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {usuario && <Header />}

      <main>
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={<Login />} />

          {/* Rutas privadas */}
       

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
            path="/"
            element={
              <RutaPrivada usuario={usuario}>
                <Home />
              </RutaPrivada>
            }
          />

          <Route
            path="/autor/:id"
            element={
              <RutaPrivada usuario={usuario}>
                <Vista_autor />
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
