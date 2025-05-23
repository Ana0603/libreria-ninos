import React from 'react';
import Header from '../components/Header';

const books = [
  { title: 'Elmo\'s Furry Friend', img: '📘' },
  { title: 'The ABCs of Cookies', img: '🍪' },
  { title: 'Tiny Insect, Big World', img: '🐞' },
  { title: 'Shrinky Pinky', img: '🦄' },
  { title: 'Magnificent Monkeys', img: '🐒' },
];

const Home = () => {
  return (
    <div className="bg-purple-100 min-h-screen">
      <Header />
      <main className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {books.map((book, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl">{book.img}</div>
            <h2 className="text-sm font-bold mt-2">{book.title}</h2>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;