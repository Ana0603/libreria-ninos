import useAutores from "../hooks/useAutores.js";


const Vista_autor = () => {
  const { autorData } = useAutores();
  return (
    <div className="container-fluid">
    Esto es una página del autor.
      </div>
  );
}
export default Vista_autor;