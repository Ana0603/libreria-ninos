import React, { useEffect, useState } from 'react';
import FichaLibro from '../components/FichaLibro';

const CatalogoLibros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data));
  }, []);

  return (
    <div className="catalogo-libros">
      <h2>Catálogo de Libros</h2>
      <div className="libros-grid">
        {libros.map(libro => (
          <FichaLibro
            key={libro.id}
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
