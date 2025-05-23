import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Mi Sitio</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="/" style={styles.link}>Inicio</a></li>
          <li><a href="/acerca" style={styles.link}>Acerca</a></li>
          <li><a href="/contacto" style={styles.link}>Contacto</a></li>
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