import React from 'react';
import { Link } from 'react-router-dom';
import './StylesProject.scss'

const ProjectListComponent = ({ projects }) => {

  return (
    <div className="main-container">
      <div className="projects-wrapper">
        <ul className="projects-list">
        {projects.map((project) => (
         <li key={project._id} className="project-item">
          <Link to={`/projects/${project._id}/epics`} className="project-link">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </Link>
         </li>))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectListComponent;