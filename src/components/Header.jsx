import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo

const Header = () => {
  return (
    <header className="main-header">
      <h1 className="main-logo">Mi Sitio</h1>
      <nav>
        <ul className="main-nav">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/libros">Libros</Link></li>
          <li><Link to="/autores">Autores</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
