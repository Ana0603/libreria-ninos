import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PaginaLibro.css';

const PaginaLibro = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  const [relacionados, setRelacionados] = useState([]);

  useEffect(() => {
    setLibro(null);
    setRelacionados([]);
  
    // 1. Obtiene todo
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => {
        // 2. Busca el libro por ID dentro de todos los libros
        const libro = data.find(libro => libro.id === parseInt(id));
        setLibro(libro);
  
        if (libro) {
          const relacionados = data
            .filter(l => l.categoria === libro.categoria && l.id !== libro.id)
            .slice(0, 5);
          setRelacionados(relacionados);
        }
      });
  }, [id]);
  

  if (!libro) return <p>Cargando...</p>;

  return (
    <div className="pagina-libro">
      <div className="contenedor-detalle">
        <div className="imagen-libro">
          <img src={libro.imagen} alt={libro.titulo} />
        </div>
        <div className="info-libro">
          <h1>{libro.titulo}</h1>
          <p className="precio">$10.00</p>
          <p className="resumen">{libro.resumen}</p>
          <ul className="ficha-tecnica">
            <li><strong>Categoría:</strong> {libro.categoria}</li>
            <li><strong>Autor:</strong> {libro.autor}</li>
            <li><strong>Año:</strong> {libro.anio}</li>
          </ul>
          <button className="btn-carrito">AÑADIR AL CARRITO</button>
        </div>
      </div>

      <h2 className="titulo-relacionados">Productos relacionados</h2>
      <div className="productos-relacionados">
        {relacionados.map(rel => (
          <Link to={`/libros/${rel.id}`} key={rel.id} className="tarjeta-relacionado">
            <img src={rel.imagen} alt={rel.titulo} />
            <p>{rel.titulo}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaginaLibro;
