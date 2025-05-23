import React from 'react';
import { Link } from 'react-router-dom';
import './FichaLibro.css';

const FichaLibro = ({ id, titulo, categoria, autor, anio, personajes, sinopsis, imagen }) => {
  return (
    <div className="ficha-libro">
      <img
        className="ficha-libro-img"
        src={imagen}
        alt={titulo}
      />
      <h3 className="ficha-libro-titulo">{titulo}</h3>
      <p><strong>Categoría:</strong> {categoria}</p>
      <p><strong>Autor:</strong> {autor}</p>
      <p><strong>Año:</strong> {anio}</p>
      {personajes?.length > 0 && (
        <p><strong>Personajes:</strong> {personajes.join(', ')}</p>
      )}
      <p className="ficha-libro-sinopsis">{sinopsis}</p>

      <Link to={`/libros/${id}`} className="btn-ver-detalle">
        Ver más detalles
      </Link>
    </div>
  );
};

export default FichaLibro;
