import React from 'react';
import { Link } from 'react-router-dom';
import './Autor.css';

const Autor = ({autor}) => {
  return (
    <div className="col-md-4 mb-4 text-center justify-content-center">
        <div className="card card-width h-100 w-100 justify-content-center">
        <img className= "foto_autor card-img-top mx-auto d-block" src={autor.foto} alt={`Foto de ${autor.nombre_autor}`} />
        <div className="card-body">
          <h1 className="card-title card_titulo_autor">{autor.nombre_autor}</h1>
          <h4 className="edad">Edad: {autor.edad}</h4>
          <p className="card-text"><strong>Número de libros:</strong> {autor.numero_libros}</p>
          <p className="card-text"><strong>País:</strong> {autor.nacionalidad}</p>
          <p className="card-text"><strong>Biografía:</strong> {autor.biografia}</p>

        </div>
      </div>
    </div>
  );
}
export default Autor;