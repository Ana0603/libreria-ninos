import React from 'react';
import { Link } from 'react-router-dom';
import './Autor.css';

const Autor = ({autor}) => {
  return (
    <div className="col-md-4 mb-4 text-center justify-content-center">
        <div className="card card-width h-100 justify-content-center">
        <img className= "foto_autor card-img-top mx-auto d-block" src={autor.foto} alt={`Foto de ${autor.nombre_autor}`} />
        <div className="card-body">
          <h1 className="card-title card_titulo_autor">{autor.nombre_autor}</h1>
          <p className="card-text">Número de libros: {autor.numero_libros}</p>
          <p className="card-text">País: {autor.nacionalidad}</p>
          <Link to={`/autor/${autor.id_autor}`} className="btn btn-primary">Ver {autor.nombre_autor}</Link>
        </div>
      </div>
    </div>
  );
}
export default Autor;