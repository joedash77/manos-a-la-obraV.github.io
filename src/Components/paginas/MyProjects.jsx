import React from 'react'
import Header from '../organisms/header/Header';
import { Link } from 'react-router-dom';
import { dataList } from '../../Data/data';
import './StylesProyect.scss'

function MyProjects() {

  const projectList = dataList.map(project => (
    <li key={project.id} className="project-item">
      <Link to={`/my-projects/${project.id}`} className="project-link">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </Link>
    </li>
  ));

  return (
    <>
      <Header title='Mis Proyectos' level={2} />
      <div className="main-container">
        <div className="projects-wrapper">
          <ul className="projects-list">
            {projectList}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MyProjects