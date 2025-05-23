import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Ficha_autor.css';

const AutorDetalle = ({ autor }) => {
  if (!autor) return <p>No se encontró información del autor.</p>;

  return (
    <div className="container-fluid">
         <h1 className="titulo-autores">Autor: {autor.nombre_autor}</h1>
        </div>
  );
};

export default AutorDetalle;