import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Mi Sitio</h1>
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
    backgroundColor: '#282c34',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem'
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
