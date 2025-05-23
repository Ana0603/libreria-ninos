import { useState, useEffect } from 'react';



const useAutores = () => {
  const [autoresData, setAutoresData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchAutores = async () => {
        setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch('https://mock.apidog.com/m1/879682-861157-default/autores');
        if (!response.ok) throw new Error('Error al obtener los datos');
        const data = await response.json();
        setAutoresData(data);
      } 
       finally {
        setLoading(false);
      }
    };

    fetchAutores();
  }, []);

  return { autoresData, loading};
}
export default useAutores;