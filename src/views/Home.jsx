import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { usuario } = useContext(AuthContext);
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data.slice(0, 3))); // Mostrar solo 3 libros
  }, []);

  return (
    <div className="home-container">

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Colecciones fantásticas</h1>
          <p className="hero-subtitle">Libros para todas las edades</p>
          <Link to="/libros" className="btn-ver-libros">Ver todos los libros</Link>
        </div>
      </section>

      {/* Bienvenida */}
      <section className="welcome-text">
        <h2>👋 ¡Hola, {usuario?.nombre || 'explorador'}!</h2>
        <p>Explora libros divertidos y educativos 📚<br />Descubre historias mágicas mientras aprendes.</p>
      </section>

      {/* Catálogo resumido */}
      <section className="mini-catalogo">
        <h2>Algunos de nuestros libros</h2>
        <div className="libros-grid">
          {libros.map(libro => (
            <div className="libro-card" key={libro.id}>
              <img src={libro.imagen} alt={libro.titulo} />
              <h3>{libro.titulo}</h3>
              <p>{libro.categoria}</p>
              <Link to={`/libros/${libro.id}`} className="btn-detalle">Ver más</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
