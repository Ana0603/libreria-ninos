import React from 'react';

const ImagenLibroDestacado = () => {
  return (
    <div style={styles.contenedor}>
      <h2 style={styles.titulo}>Libro destacado</h2>
      <img
        src="/img/libro-34.jpg"
        alt="Libro 34"
        style={styles.imagen}
      />
    </div>
  );
};

const styles = {
  contenedor: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'var(--gris-fondo)',
  },
  titulo: {
    fontSize: '1.5rem',
    color: 'var(--verde-principal)',
    marginBottom: '1rem',
  },
  imagen: {
    maxWidth: '300px',
    width: '100%',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
};

export default ImagenLibroDestacado;
