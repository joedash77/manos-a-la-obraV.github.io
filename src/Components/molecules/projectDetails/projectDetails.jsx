import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css';
import { useEpics } from './useEpics';
import CreateForm from '../FormTasks/CreateForm';


const ProjectDetailsComponent = ({ projects }) => {

  const {
    epics,
    loading,
    error,
    addEpic,
    updateEpic,
    deleteEpic,
    editingEpic,
    setEditingEpic,
    showAddForm,
    setShowAddForm,
  } = useEpics(projects._id);

  return (
    <div className="project-details-wrapper">
      <div className="story-container">
        <h1 className="project-name">{projects.name}</h1>
        <hr className="divider" />
        <p className="project-description">{projects.description}</p>
        <h2 className="epics-title">Epicas</h2>
        <div className="epics-layout">
          <button className="add-task-button" onClick={() => setShowAddForm(true)}>
            Agregar Epica
          </button>

          {/* Formulario para agregar épica */}
          {showAddForm && (
              <CreateForm
                title="Agregar Épica"
                initialData={{
                  name: '',
                  description: '',
                  project: projects._id,
                }}
                fields={[
                  { name: 'name', label: 'Nombre de la Épica' },
                  { name: 'description', label: 'Descripción', type: 'textarea' },
                ]}
                onSubmit={addEpic}
                onClose={() => setShowAddForm(false)}
              />
          )}

          {/* Formulario para editar épica */}
          {editingEpic && (
              <CreateForm
                title="Editar Épica"
                initialData={editingEpic}
                fields={[
                  { name: 'name', label: 'Nombre de la Storie' },
                  { name: 'description', label: 'Descripción', type: 'textarea' },
                ]}
                onSubmit={updateEpic}
                onClose={() => setEditingEpic(null)}
              />
          )}
      </div>

        {loading && <p>Cargando épicas...</p>}

        <ul className="task-list">
          {epics.map((epic) => (
            <li key={epic._id} className="epic-item">
              <div className="epics-header">
                <Link to={`/epics/${epic._id}/stories`} className="epic-link">
                  <h3 className="epics-name">{epic.name}</h3>
                </Link>
                <div className="epics-actions">
                  <button onClick={() => setEditingEpic(epic)} className="edit-epics-button">
                    ✎
                  </button>
                  <button onClick={() => deleteEpic(epic._id)} className="delete-epics-button">
                    -
                  </button>
                </div>
              </div>
              {epic.description && <p className="epic-description">{epic.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailsComponent;
