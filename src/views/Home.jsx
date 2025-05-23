import React from 'react';
import './Home.css';
import Header from '../components/Header';

const books = [
  { title: 'Libros en nuevos', img: '📘' },
  { title: 'Libros en promoción', img: '🍪' },
  { title: 'Más populares', img: '🐞' },
];

const Home = ({ usuario }) => {
    return (
      <div className="home-container">
        <section className="welcome-section">
          <div className="welcome-text">
            <h2>👋 ¡Bienvenido, {usuario?.nombre || 'explorador'}!</h2>
            <h3>Explora libros divertidos y educativos 📚</h3>
            <p>Encuentra tus personajes favoritos y descubre historias mágicas mientras aprendes.</p>
            <button disabled className="welcome-button">Explorar libros</button>
          </div>
          <div className="welcome-image">
            <img src="https://via.placeholder.com/300x100.png?text=Banner+de+Prueba" alt="Ilustración bienvenida" />
          </div>
        </section>

        <hr />
        <br />
  
        <h2>¿Qué hay de nuevo?</h2>
        <div className="card-container">
          {books.map((book, index) => (
            <div className="card" key={index}>
              <div className="emoji">{book.emoji}</div>
              <h3>{book.title}</h3>
              <button disabled className="disabled-button">Leer</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Home;
