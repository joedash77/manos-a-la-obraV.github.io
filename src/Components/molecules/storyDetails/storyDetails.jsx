import React from 'react';
import './StylesStoryDetails.scss'
import { addTaskToStory, useFetchDeleteTask } from '../../../utils/apiCalls';

const StoriesDetails = ({ stories, tasks }) => {

  const {deleteTask, error: deleteTaskError} = useFetchDeleteTask();

  const newTask = {
    done: 'false',
    story: stories._id,
    name: 'tarea nuevita',
    description: 'descripcion de la tarea',
    created: Date.now(),
    due: Date.now()
  }; 

  const handleClick = () => {
    try {
      const addedTask = addTaskToStory(newTask);
      console.log('Tarea agregada con éxito:');
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  }

  const handleDelete = (taskId) => {
    console.log(taskId);
    deleteTask(taskId);
  }

  return (
    <div className="story-page-container">
    <div className="story-container">
      <h1 className="story-title">{stories.name}</h1>
      <hr className="divider" />
      <p className="story-description">{stories.description}</p>
      <h2 className="story-subtitle">Tareas</h2>
      <button onClick={handleClick}>Agregar Tarea</button> 
      
      <ul className="task-list">
        {tasks.map((t) => ( //mostrar las tareas y los botones para borrar y editar
          <li key={t._id} className="task-item">
            {console.log(t._id)}
            <span className="task-name">{t.name}:</span>
            <span className="task-description"> {t.description}</span>
            <button onClick={() => handleDelete(t._id)}> - </button>
          </li>
        ))}
      </ul>

    </div>
  </div>
  );
};

export default StoriesDetails;