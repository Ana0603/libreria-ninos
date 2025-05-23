import Autor from "../components/Autor.jsx";
import { autores } from "../data/data_autores.js";


const ficha_autor = () => {
  return (
    <div className="container mt-4">
     <div className="row">
        {autores.map((autor) => (
          <Autor key={autor.id} autor={autor}/>
        ))}
      </div>
      </div>
  );
}
export default ficha_autor;