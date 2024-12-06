import { useEffect, useState } from 'react';

const header = {
  'Content-Type': 'application/json',
  'auth': localStorage.getItem('token')
};

export const useFetchResource = (endpoint) => {
  const [resource, setResource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchData();
  }, [endpoint]);

  return { resource, loading, error };
};


  export const addResource = async (taskData,endpoint) => {
  
    console.log('Datos enviados a la API:', taskData); // Verifica los datos antes de enviarlos
  
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

  export const useFetchDeleteTask = () => {
    const [error, setError] = useState(null);

    const deleteTask = (taskId) => {
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks/${taskId}`, {
      method: 'DELETE',
      headers: header
      })
      .then(response => response.json())
      .then(data => {
        console.log('Tarea eliminada:', data);
      })
      .catch(err => setError(err));
    }

    return {deleteTask, error };
  }