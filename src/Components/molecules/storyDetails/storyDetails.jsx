import React, { useState } from 'react';
import './StylesStoryDetails.scss'
import { addResource, useFetchDeleteTask, useFetchResource } from '../../../utils/apiCalls';
import CreateForm from '../FormTasks/CreateForm';

const StoriesDetails = ({ stories }) => {
  const {resource: tasks, loading, error, refetch} = useFetchResource(`stories/${stories._id}/tasks`);
  const { deleteTask, error: deleteTaskError } = useFetchDeleteTask();
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = async (taskData) => {
    try {
      await addResource(taskData, 'tasks');
      setShowForm(false); // Ocultar el formulario después de agregar la tarea
      refetch();
    } catch (err) {
      console.error('Error al agregar tarea:', err);
      alert('Error al agregar la tarea');
    }
  };

  const handleDelete = async (taskId) => {
    try{

      console.log(taskId);
      await deleteTask(taskId);
      refetch();
    }catch(err){
      console.error('Error al borrar tarea:', err);
      alert('Error al eliminar la tarea');
    }
  };

  return (
    <div className="story-page-container">
      <div className="story-container">
        <h1 className="story-title">{stories.name}</h1>
        <hr className="divider" />
        <p className="story-description">{stories.description}</p>
        <h2 className="story-subtitle">Tareas</h2>
  
        {loading ? (
          <p>Cargando tareas...</p>
        ) : (
          tasks.length <= 0 && <p className="no-tasks-message">No hay tareas agregadas</p>
        )}
        {error && <p>Error al cargar tareas: {error.message}</p>}
  
        {/* Contenedor principal con diseño flex */}
        <div className="tasks-layout">
          {/* Botón para mostrar el formulario */}
          <button className="add-task-button" onClick={() => setShowForm(true)}>
            Agregar Tarea
          </button>
  
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
              onClose={() => setShowForm(false)}
            />
          )}
        </div>
  
        {/* Lista de tareas */}
        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t._id} className="task-item">
              <span className="task-name">{t.name}:</span>
              <span className="task-description"> {t.description}</span>
              <button onClick={() => handleDelete(t._id)} className="delete-button"> - </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StoriesDetails;