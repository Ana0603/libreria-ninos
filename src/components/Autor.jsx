import React from 'react';
import './Autor.css';

const Autor = ({autor}) => {
  return (
    <div className="col-md-4 mb-4 text-center justify-content-center">
        <div className="card card-width h-100 justify-content-center">
        <img className= "foto_autor card-img-top mx-auto d-block" src={autor.foto} alt={`Foto de ${autor.nombre}`} />
        <div className="card-body">
          <h1 className="card-title card_titulo_autor">{autor.nombre}</h1>
          <p className="card-text">País:{autor.pais}</p>
          <a href="#" class="btn btn-primary">Ver {autor.nombre}</a>
        </div>
      </div>
    </div>
  );
}
export default Autor;