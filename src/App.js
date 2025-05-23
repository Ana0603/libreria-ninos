import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import CatalogoLibros from './views/CatalogoLibros';
import FichaLibro from './components/FichaLibro';
<<<<<<< HEAD
import Home from './views/Home';
=======
import Contacto from './components/Contacto';
import Landing_Autores from './views/Landing_Autores';
>>>>>>> 74a6747d2d0e5c15eac69e1df0b057488d7cbd5b

function App() {
  const [usuario, setUsuario] = useState(null);

  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: '2rem' }}>
        <Routes>
        <Route path="/" element={<Home usuario={usuario} />} />
          <Route path="/libros" element={<CatalogoLibros />} />
<<<<<<< HEAD
          <Route path="/libros/:id" element={<FichaLibro />} />         
=======
          <Route path="/libros/:id" element={<FichaLibro />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/autores" element={<Landing_Autores />} />
          <Route path="/" element={<p>Bienvenido, {usuario.nombre || 'usuario'} 😊</p>} />
>>>>>>> 74a6747d2d0e5c15eac69e1df0b057488d7cbd5b
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
