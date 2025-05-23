import React, { useEffect, useState } from 'react';
import FichaLibro from '../components/FichaLibro';

const CatalogoLibros = () => {
  const [libros, setLibros] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://mock.apidog.com/m1/879682-861157-default/libros')
      .then(res => res.json())
      .then(data => setLibros(data));

    fetch('https://mock.apidog.com/m1/879682-861157-default/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data));
  }, []);

  const obtenerNombreCategoria = (id_categoria) => {
    const cat = categorias.find(c => c.id_categoria === id_categoria);
    return cat ? cat.nombre_categoria : 'Sin categoría';
  };

  return (
    <div>
      <h2>Catálogo de Libros</h2>
      <div className="contenedor-libros">
        {libros.map(libro => (
          <FichaLibro
            key={libro.id}
            nombre={libro.nombre}
            imagen={libro.imagen}
            precio={libro.precio}
            categoria={obtenerNombreCategoria(libro.id_categoria)}
          />
        ))}
      </div>
    </div>
  );
};

export default CatalogoLibros;
