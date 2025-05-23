import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';


function App() {
  const [usuario, setUsuario] = useState(null);

  if (!usuario) {
    return <Login onLogin={setUsuario} />;
  }

  return (
    <div>
      <Header />
      <main>
        {'Hola esto es un ejemplo de una libreria de niños'}
      </main>
    </div>
  );
}

export default App;
