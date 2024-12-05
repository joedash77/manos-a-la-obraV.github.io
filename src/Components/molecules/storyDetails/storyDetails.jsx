import React, { useState } from 'react';
import './StylesStoryDetails.scss'
import { addTaskToStory, useFetchDeleteTask } from '../../../utils/apiCalls';
import CreateForm from '../FormTasks/CreateForm';

const StoriesDetails = ({ stories, tasks }) => {
  const { deleteTask, error: deleteTaskError } = useFetchDeleteTask();
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = async (taskData) => {
    try {
      await addTaskToStory(taskData);
      alert('Tarea agregada exitosamente');
      setShowForm(false); // Ocultar el formulario después de agregar la tarea
    } catch (err) {
      console.error('Error al agregar tarea:', err);
      alert('Error al agregar la tarea');
    }
  };

  const handleDelete = (taskId) => {
    console.log(taskId);
    deleteTask(taskId);
  };

  return (
    <div className="story-page-container">
      <div className="story-container">
        <h1 className="story-title">{stories.name}</h1>
        <hr className="divider" />
        <p className="story-description">{stories.description}</p>
        <h2 className="story-subtitle">Tareas</h2>
        
        {/* Botón para mostrar el formulario */}
        <button onClick={() => setShowForm(true)}>Agregar Tarea</button> 
        
        {/* Formulario de creación de tarea */}
        {showForm && (
          <CreateForm
            title="Agregar Tarea"
            initialData={{
              done: false,
              story: stories._id,
              name: '',
              description: '',
              created: new Date().toISOString(),
              due: new Date().toISOString(),
            }}
            fields={[
              { name: 'name', label: 'Título' },
              { name: 'description', label: 'Descripción' },
              { name: 'created', label: 'Fecha de Creación', type: 'date' },
              { name: 'due', label: 'Fecha de Finalización', type: 'date' },
            ]}
            onSubmit={handleAddTask}
          />
        )}
        
        {/* Lista de tareas */}
        <ul className="task-list">
          {tasks.map((t) => (
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