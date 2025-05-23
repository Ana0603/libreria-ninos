// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';

const books = [
  { title: 'Libros en nuevos', img: '📘' },
  { title: 'Libros en promoción', img: '🍪' },
  { title: 'Más populares', img: '🐞' },
];

const Home = ({ usuario }) => {
    return (
      <div className="bg-purple-100 min-h-screen p-4">
        <h1 className="text-2xl font-bold text-center mb-6">👋 ¡Hola, {usuario?.nombre || 'explorador'}!</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {books.map((book, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer text-center"
            >
              <div className="text-5xl">{book.emoji}</div>
              <p className="mt-2 font-semibold">{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Home;
