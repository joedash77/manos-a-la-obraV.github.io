import { useEffect, useState } from 'react';

const header = {
  'Content-Type': 'application/json',
  'auth': localStorage.getItem('token')
};

//Hooks epicas:
  // Hook para obtener las épicas
  export const useFetchEpics = (epicId) => {
    const [epics, setEpics] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}`, {
        method: 'GET',
        headers: header
      })
        .then(response => response.json())
        .then(data => setEpics(data.data))
        .catch(err => setError(err));
    }, [epicId]);

    return { epics, error };
  };

  // Hook para obtener las epicas de un proyecto específico
    export const useFetchProjectEpics = (projectId) => {
      const [epics, setEpics] = useState([]);
    
      useEffect(() => {
        fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}/epics`, {
          method: 'GET',
          headers: header
        })
        .then(response => response.json())
        .then(data => setEpics(data.data))
      }, [projectId]);
    
      return {epics};
    };


//Hook para historias:
  // Hook para obtener las historias de una épica específica
  export const useFetchEpicsStories = (epicId) => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}/stories`, {
        method: 'GET',
        headers: header
      })
        .then(response => response.json())
        .then(data => setStories(data.data))
        .catch(err => setError(err));
    }, [epicId]);

    return { stories, error };
  };

  // Hook para obtener todas las historias 
  export const useFetchStories = () => {
      const [stories, setStories] = useState([]);
      const [error, setError] = useState(null);
    
    
      useEffect(() => {
        fetch('https://lamansysfaketaskmanagerapi.onrender.com/api/stories', {
          method: 'GET',
          headers: header
        })
          .then(response => response.json())
          .then(data => setStories(data.data))
          .catch(err => setError(err));
      }, []);
    
      return { stories, error };
    };

  // Hook para obtener una historia especifica 
  export const useFetchStoriesSpecific = (storieId) => {
    const [stories, setStories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/stories/${storieId}`, {
        method: 'GET',
        headers: header
      })
        .then(response => response.json())
        .then(data => setStories(data.data))
        .catch(err => setError(err));
    }, [storieId]);

    return { stories, error };
  };

//Hook para los proyectos
  //Hook para obtener todas los proyectos
  export const useFetchProjects = () => {
      const [projects, setProyects] = useState([]);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        fetch('https://lamansysfaketaskmanagerapi.onrender.com/api/projects', {
          method: 'GET',
          headers: header
        })
          .then(response => response.json())
          .then(data => setProyects(data.data))
          .catch(err => setError(err));
      }, []);
    
      return { projects, error };
    };

  //Hook para obtener un proyecto especifico
  export const useFetchProjectSpecific = (projectId) => {
    const [projects, setProjects] = useState({}); // Cambiado a un objeto vacío
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}`, {
        method: 'GET',
        headers: header
      })
        .then(response => response.json())
        .then(data => setProjects(data.data || {})) // Asegúrate de que sea un objeto
        .catch(err => setError(err));
    }, [projectId]);
  
    return { projects, error };
  };
  

//Hook para tareas
  //Hook para obtener las tareas de una historia
  export const useFetchTasks = (storyId) => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/stories/${storyId}/tasks`, {
        method: 'GET',
        headers: header
      })
        .then(response => response.json())
        .then(data => setTasks(data.data))
        .catch(err => setError(err));
    }, [storyId]);
  
    return { tasks, error };
  };

  export const addTaskToStory = (taskData) => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/tasks/`, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(taskData)
      })
      .then(response => response.json())
      .then(data => 
        {console.log('tarea agregada: ', data.data);
        return data;
      })
      .catch(err => {
        console.log('Error al agregar tarea: ', err);
        throw err;
      });
  }

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

