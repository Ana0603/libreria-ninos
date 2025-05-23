import Autor from "../components/Autor";
import useAutores from "../hooks/useAutores.js";

const Vista_autores = () => {
  const { autoresData, loading, error } = useAutores();

  if (loading) {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="spinner-grow" role="status"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <h1>Error al cargar los autores</h1>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {autoresData.map((autor) => (
          <Autor key={autor.id} autor={autor} />
        ))}
      </div>
    </div>
  );
};

export default Vista_autores;
