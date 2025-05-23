import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>El Búho Lector</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Inicio</Link></li>
          <li><Link to="/libros" style={styles.link}>Libros</Link></li>
          <li><Link to="/autores" style={styles.link}>Autores</Link></li>
          <li><Link to="/contacto" style={styles.link}>Contacto</Link></li>
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
