import React, { useEffect, useState } from 'react';
import FichaLibro from '../components/FichaLibro';
import './CatalogoLibros.css'; // si tienes estilos

const CatalogoLibros = () => {
  const [libros, setLibros] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data));
  }, []);

  const categoriasUnicas = ['Todas', ...new Set(libros.map(libro => libro.categoria))];

  const librosFiltrados =
    categoriaSeleccionada === 'Todas'
      ? libros
      : libros.filter(libro => libro.categoria === categoriaSeleccionada);

  return (
    <div className="catalogo-libros">
      <h2>Catálogo de Libros</h2>

      {/* Botones de filtro */}
      <div className="filtros-categorias">
        {categoriasUnicas.map((categoria, idx) => (
          <button
            key={idx}
            className={`btn-filtro ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
            onClick={() => setCategoriaSeleccionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Grid de libros */}
      <div className="libros-grid">
        {librosFiltrados.map(libro => (
          <FichaLibro
            id={libro.id}
            titulo={libro.titulo}
            categoria={libro.categoria}
            autor={libro.autor}
            anio={libro.anio}
            personajes={libro.personajes}
            sinopsis={libro.sinopsis}
            imagen={libro.imagen}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogoLibros;
