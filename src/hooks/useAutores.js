import { useState, useEffect } from 'react';
import axios from 'axios';
import { autores } from '../data/data_autores';

const useAutores = () => {
  const [autoresData, setAutoresData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAutores = async () => {
        setLoading(true);
      try {
        // Simulando una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get('https://mock.apidog.com/m1/879682-861157-default/autores');
        // const response = await axios.get('URL_DE_TU_API');
        // setAutoresData(response.data);
        setAutoresData(autores);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAutores();
  }, []);

  return { autoresData, loading, error };
}
export default useAutores;