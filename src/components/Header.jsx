import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>El Búho Lector</h1>
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

const styles = {
  header: {
    backgroundColor: '#D9967E',
    padding: '1rem 2rem',
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  },
  logo: {
    margin: 0,
    fontSize: '1.7rem'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default Header;
