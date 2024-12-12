import React from 'react';
import { Link } from 'react-router-dom';
import { useEpicAndStories } from './useEpicAndStories';
import './StylesEpic.css'
import CreateForm from '../FormTasks/CreateForm';

const EpicsAndStories = ({ epics }) => {

  const{
    stories,
    loading,
    error,
    addStorie,
    updateStorie,
    deleteStorie,
    editingStorie,
    setEditingStorie,
    showAddForm,
    setShowAddForm,
  } = useEpicAndStories(epics._id)

  return (
    <div className="epica-container">
      <div className='story-container'>
        <h1 className="epica-title">{epics.name}</h1>
        <hr className="divider" />
        <p className="epica-description">{epics.description}</p>

        <h2 className="epics-subtitle">Historias</h2>
        <div className="epics-layout">
            <button className="add-task-button" onClick={() => setShowAddForm(true)}>
              Agregar Storie
            </button>

            {showAddForm && (
                <CreateForm
                  title="Agregar Storie"
                  initialData={{
                    name: '',
                    description: '',
                    epic: epics._id,
                    owner: localStorage.getItem("userID"),
                    assignedTo: localStorage.getItem("userID"),
                    points:'',
                    created: Date.now,
                    finished: '',
                    status: 'todo'
                  }}
                  fields={[
                    { name: 'name', label: 'Nombre de la Storie', type: 'text' },
                    { name: 'description', label: 'Descripción', type: 'textarea' },
                    { name: 'points', label: 'Puntos', type: 'number', placeholder: 'Entre 0 y 5', min: 0, max: 5 },
                    { name: 'due', label: 'Fecha de vencimiento', type: 'date' },
                    { name: 'started', label: 'Fecha de inicio', type: 'date' },
                    { name: 'finished', label: 'Fecha de finalización', type: 'date' },
                    {
                      name: 'status',
                      label: 'Estado',
                      type: 'select',
                      options: [
                        { value: 'todo', label: 'Por hacer' },
                        { value: 'running', label: 'En progreso' },
                        { value: 'done', label: 'Hecho' },
                      ],
                    },
                    { name: 'icon', label: 'Ícono', type: 'text', placeholder: 'ícono' },
                  ]}
                  onSubmit={addStorie}
                  onClose={() => setShowAddForm(false)}
                />
            )}

            {editingStorie && (
                <CreateForm
                  title="Editar Storie"
                  initialData={editingStorie}
                  fields={[
                    { name: 'name', label: 'Nombre de la Storie', type: 'text' },
                    { name: 'description', label: 'Descripción', type: 'textarea' },
                    { name: 'points', label: 'Puntos', type: 'number', placeholder: 'Entre 0 y 5', min: 0, max: 5 },
                    { name: 'due', label: 'Fecha de vencimiento', type: 'date' },
                    { name: 'started', label: 'Fecha de inicio', type: 'date' },
                    { name: 'finished', label: 'Fecha de finalización', type: 'date' },
                    {
                      name: 'status',
                      label: 'Estado',
                      type: 'select',
                      options: [
                        { value: 'todo', label: 'Por hacer' },
                        { value: 'running', label: 'En progreso' },
                        { value: 'done', label: 'Hecho' },
                      ],
                    },
                    { name: 'icon', label: 'Ícono', type: 'text', placeholder: 'ícono' },
                  ]}
                  onSubmit={updateStorie}
                  onClose={() => setEditingStorie(null)}
                />
            )}
        </div>


        <ul className="task-list">
          {stories.map((story) => (
            <li key={story._id} className="epic-story-item">
              <div className='task-content'>
                <Link to={`/stories/${story._id}/tasks`} className="epic-link">
                  <h3 className="epics-name">{story.name}</h3>
                </Link>
                <div className="epics-actions">
                    <button onClick={() => setEditingStorie(story)} className="edit-epics-button">
                      ✎
                    </button>
                    <button onClick={() => deleteStorie(story._id)} className="delete-epics-button">
                      -
                    </button>
                  </div>               
                </div>
                <p className="epic-description">{story.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpicsAndStories;