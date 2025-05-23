import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Libreria niños</h1>
      <nav>
        <ul style={styles.navList}>
<<<<<<< HEAD
          <li><a href="/" style={styles.link}>Inicio</a></li>
          <li><a href="/CatalogoLibros" style={styles.link}>Categorias</a></li>
          <li><a href="/CatalogoLibros" style={styles.link}>Autores</a></li>
          <li><a href="/contacto" style={styles.link}>Contacto</a></li>
=======
          <li><Link to="/" style={styles.link}>Inicio</Link></li>
          <li><Link to="/libros" style={styles.link}>Libros</Link></li>
          <li><Link to="/autores" style={styles.link}>Autores</Link></li>
          <li><Link to="/contacto" style={styles.link}>Contacto</Link></li>
>>>>>>> 74a6747d2d0e5c15eac69e1df0b057488d7cbd5b
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#D9967E',
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
