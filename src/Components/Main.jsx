import React, { useState, useEffect } from 'react'
import './Main.css'
import 'font-awesome/css/font-awesome.min.css';
import Header from './organisms/header/Header';
import { useFetchResource } from '../utils/apiCalls';

function Main() {
  const userId = localStorage.getItem('userID');
  const { resource: user } = useFetchResource(`users/${userId}`);
  const { resource: project } = useFetchResource(`projects/user/${userId}`);

  const [totalProjects, setTotalProjects] = useState(0);

  useEffect(() => {
    if (project) {
      setTotalProjects(project.length); // Calcula el total de proyectos
    }
  }, [project]); 

  return (
    <div>
        <Header title='Menu'/>
        <h1>Bienvenido {user.username}</h1>
        <h2>Proyectos creados: {totalProjects}</h2>
    </div>
  )
}

export default Main;