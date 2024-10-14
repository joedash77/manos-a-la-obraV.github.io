import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetails.css'

const ProjectDetailsComponent = ({ projects, epics }) => {
  return (
    <div className="project-details-wrapper">
      <div className="project-info">
        <h1 className="project-name">{projects.name}</h1>
        <hr className="divider" />
        <p className="project-description">{projects.description}</p>
        <h2 className="epics-title">Epicas</h2>
        <ul className="epics-list">
          {epics.map((epics) => (
            <li key={epics._id} className="epic-item">
              <Link to={`/epics/${epics._id}/stories`} className="epic-link">
                {epics.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailsComponent;