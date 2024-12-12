import React from 'react';
import { Link } from 'react-router-dom';
import './StylesProject.scss';
import { useProjects } from './useProjects';
import CreateForm from '../FormTasks/CreateForm';

const ProjectListComponent = () => {
  const {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    editingProject,
    setEditingProject,
    showAddForm,
    setShowAddForm,
  } = useProjects();

  return (
    <div className="main-container">
      <div className="projects-wrapper">
        <div className="task-layout">
          <button
            className="add-project-button"
            onClick={() => setShowAddForm(true)}
          >
            Agregar Proyecto
          </button>
            {/* Formulario para agregar proyecto */}
          {showAddForm && (
            <div className="create-form-a">
              <CreateForm
                title="Agregar Proyecto"
                initialData={{
                  name: '',
                  description: '',
                  icon: '', // Campo opcional
                  members: localStorage.getItem("userID") 
                  ? [{ _id: localStorage.getItem("userID") }] 
                  : [], // Obtén el userID desde localStorage o inicializa vacío
                }}
                fields={[
                  { name: 'name', label: 'Nombre del Proyecto' },
                  { name: 'description', label: 'Descripción', type: 'textarea' },
                  { name: 'icon', label: 'Ícono', type: 'text' },
                ]}
                onSubmit={addProject}
                onClose={() => setShowAddForm(false)}
              />
            </div>
          )}

          {/* Formulario para editar proyecto */}
          {editingProject && (
            <div className='create-form-a'>
            
              <CreateForm
                title="Editar Proyecto"
                initialData={editingProject}
                fields={[
                  { name: 'name', label: 'Nombre del Proyecto' },
                  { name: 'description', label: 'Descripción', type: 'textarea' },
                  { name: 'icon', label: 'Ícono', type: 'text' },
                ]}
                onSubmit={updateProject}
                onClose={() => setEditingProject(null)}
              />
            </div>
          )}
        </div> 
        

        {loading && <p>Cargando proyectos...</p>}
        {error && <p>Error al cargar proyectos: {error.message}</p>}

        <ul className="projects-list">

          {projects.map((project) => (
            <li key={project._id} className="project-item">
              <div className="project-header">
                <Link to={`/projects/${project._id}/epics`} className="project-link">
                  <h3 className="project-name">{project.name}</h3>
                </Link>
                <div className="project-actions">
                  <button
                    onClick={() => setEditingProject(project)}
                    className="edit-button"
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => deleteProject(project._id)}
                    className="delete-button"
                  >
                    -
                  </button>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectListComponent;
