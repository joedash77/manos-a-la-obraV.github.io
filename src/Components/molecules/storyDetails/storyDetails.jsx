import React from 'react';
import './StylesStoryDetails.scss';
import { useTasks } from './useTasks';
import TaskList from './taskList';
import TaskForm from './taskForm';

const StoriesDetails = ({ stories }) => {
  const {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    editingTask,
    setEditingTask,
    showAddForm,
    setShowAddForm,
  } = useTasks(stories._id);

  return (
    <div className="story-page-container">
      <div className="story-container">
        <h1 className="story-title">{stories.name}</h1>
        <hr className="divider" />
        <p className="story-description">{stories.description}</p>
        <h2 className="story-subtitle">Tareas</h2>

        {loading && <p>Cargando tareas...</p>}

        <div className="tasks-layout">
          <button
            className="add-task-button"
            onClick={() => setShowAddForm(true)}
          >
            Agregar Tarea
          </button>

          {showAddForm && (
            <TaskForm
              title="Agregar Tarea"
              initialData={{
                done: false,
                story: stories._id,
                name: '',
                description: '',
                created: Date.now,
                due: new Date().toISOString(),
              }}
              onSubmit={addTask}
              onClose={() => setShowAddForm(false)}
            />
          )}

          {editingTask && (
            <TaskForm
              title="Editar Tarea"
              initialData={editingTask}
              onSubmit={updateTask}
              onClose={() => setEditingTask(null)}
            />
          )}
        </div>

        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default StoriesDetails;
