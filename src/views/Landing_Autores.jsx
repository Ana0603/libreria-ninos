import Autor from "../components/Autor";
import { autores } from "../data/data_autores.js";


const vista_autores = () => {
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
export default vista_autores;