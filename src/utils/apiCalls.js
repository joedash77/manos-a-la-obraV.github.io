import { useEffect, useState } from 'react';

const header = {
  'Content-Type': 'application/json',
  'auth': localStorage.getItem('token')
};

export const useFetchResource = (endpoint) => {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchData = async () => {
      try {
        setLoading(true); // Inicia la carga
        const response = await fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/${endpoint}`, {
          method: 'GET',
          headers: header
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setResource(data.data); // Establece los datos en el estado
      } catch (err) {
        setError(err); // Establece el error en el estado
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
    
    useEffect(() =>{
      fetchData();
    },  [endpoint]);
  return { resource, loading, error, refetch: fetchData };
};


  export const addResource = async (taskData,endpoint) => {
    try {
      const response = await fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/${endpoint}`, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(taskData),
      });
  
      // Si la respuesta no es exitosa, lanzamos un error
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error del servidor:', errorText);
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }
  
      // Si la respuesta es exitosa, obtenemos los datos
      const data = await response.json();
      console.log('Tarea agregada: ', data);
      return data;
    } catch (error) {
      console.error('Error al agregar tarea:', error);
      throw error; // Lanzamos el error para que pueda ser manejado más arriba
    }
  };

 // Hook para eliminar un recurso de la API
export const useFetchDeleteTask = () => {
  const [error, setError] = useState(null);

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: header,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('Tarea eliminada:', data);
      return data;
    } catch (err) {
      console.error('Error al eliminar tarea:', err);
      setError(err);
      throw err;
    }
  };

  return { deleteTask, error };
};