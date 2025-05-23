import React from 'react';
import './Ficha_autor.css';

const AutorDetalle = ({ autor }) => {
  if (!autor) return <p>No se encontró información del autor.</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={autor.foto}
              alt={`Foto de ${autor.nombre}`}
              className="img-fluid rounded-circle"
              style={{ maxWidth: '200px' }}
            />
          </div>
          <div className="col-md-8">
            <h2>{autor.nombre}</h2>
            <p><strong>País:</strong> {autor.pais}</p>
            <p>{autor.biografia}</p>
            <h5>Libros:</h5>
            <ul>
              {autor.libros.map((libro, index) => (
                <li key={index}>{libro}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutorDetalle;