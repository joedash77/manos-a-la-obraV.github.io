import React, { useEffect, useState } from 'react'
import Header from '../organisms/header/Header';
import { Link } from 'react-router-dom';
import './StylesProyect.scss'

function MyProjects() {
  const [projects, setProjects] = useState([]);

  const header = {
    'Content-Type': 'application/json',
    'auth': localStorage.getItem('token')
  }

  useEffect(() => {
    fetch('https://lamansysfaketaskmanagerapi.onrender.com/api/projects', 
      {
        method: 'GET',
        headers: header
      })
    .then(respones => respones.json())
    .then(data => setProjects(data.data))
  }, []);
  
  const projectList = projects.map((project) => (
    <li key={project._id} className="project-item">
      <Link to={`/projects/${project._id}/epics`} className="project-link">
        {console.log(projects)}
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