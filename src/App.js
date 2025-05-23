import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Login from './components/Login';
import CatalogoLibros from './views/CatalogoLibros';
import FichaLibro from './components/FichaLibro';
import Home from './views/Home';

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
          <Route path="/libros/:id" element={<FichaLibro />} />         
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
