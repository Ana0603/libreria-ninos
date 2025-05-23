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


function App() {
  const [usuario, setUsuario] = useState(null);

  return (
   
    <BrowserRouter>
      {usuario && <Header />}
      <main style={{ padding: '2rem' }}>
      <Header />
      <main >
        <Routes>
          <Route
            path="/"
            element={
              usuario ? <Navigate to="/home" /> : <Login onLogin={setUsuario} />
            }
          />

          <Route
            path="/home"
            element={
              usuario ? <Home usuario={usuario} /> : <Navigate to="/" />
            }
          />

          <Route path="/libros" element={<CatalogoLibros />} />
          <Route path="/libros/:id" element={<PaginaLibro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/autores" element={<Landing_Autores />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
