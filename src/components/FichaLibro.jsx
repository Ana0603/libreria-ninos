import React from 'react';
import './FichaLibro.css';

const FichaLibro = ({ nombre, imagen, precio, categoria }) => {
  return (
    <div className="ficha-libro">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p className="categoria">{categoria}</p>
      <p className="precio">${precio}</p>
    </div>
  );
};

export default FichaLibro;
