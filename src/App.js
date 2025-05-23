<<<<<<< HEAD
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import CatalogoLibros from './views/CatalogoLibros';
import FichaLibro from './components/FichaLibro';
import Home from './views/Home';
import Contacto from './components/Contacto';
import Landing_Autores from './views/Landing_Autores';
import PaginaLibro from './views/PaginaLibro';
=======
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
>>>>>>> 52c5d8ede4097cc74b2fca000715df0402f7b63c

import Header from "./components/Header";
import Login from "./components/Login";
import CatalogoLibros from "./views/CatalogoLibros";
import PaginaLibro from "./views/PaginaLibro";
import Contacto from "./components/Contacto";
import Landing_Autores from "./views/Landing_Autores";
import Vista_autor from "./views/Vista_autor";
import RutaPrivada from "./components/RutaPrivada";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
   
    <BrowserRouter>
      {usuario && <Header />}
<<<<<<< HEAD
      <main style={{ padding: '2rem' }}>
      <Header />
      <main >
        <Routes>
          <Route
            path="/"
            element={
              usuario ? <Navigate to="/home" /> : <Login onLogin={setUsuario} />
=======

      <main>
        <Routes>
          {/* Ruta pública */}
          <Route path="/login" element={<Login onLogin={setUsuario} />} />

          {/* Rutas privadas */}
          <Route
            path="/"
            element={
              <RutaPrivada usuario={usuario}>
                <p>Bienvenido, {usuario?.nombre || 'usuario'} 😊</p>
              </RutaPrivada>
>>>>>>> 52c5d8ede4097cc74b2fca000715df0402f7b63c
            }
          />

          <Route
<<<<<<< HEAD
            path="/home"
            element={
              usuario ? <Home usuario={usuario} /> : <Navigate to="/" />
            }
          />

          <Route path="/libros" element={<CatalogoLibros />} />
          <Route path="/libros/:id" element={<PaginaLibro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/autores" element={<Landing_Autores />} />
=======
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
>>>>>>> 52c5d8ede4097cc74b2fca000715df0402f7b63c
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
