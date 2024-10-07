import React from 'react'
import Header from '../organisms/header/Header';
import { Link } from 'react-router-dom';
import { dataList } from '../../Data/data';

function MyProjects() {

  const projectList = dataList.map(project => (
    <li key={project.id}>
        <Link to={`/my-projects/${project.id}`}>
          {project.name};
          {project.description};
        </Link>
    </li>
  ));

  return (
    <div>
      <Header title='Mis Proyectos'level={2}/>
      {projectList}
    </div>
  )
}

export default MyProjects