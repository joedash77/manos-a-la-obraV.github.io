import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../organisms/header/Header';

function My_Projects() {
  const {taskId} = useParams();
  return (
    <div>
      <Header title='Mis Proyectos'level={2}/>
    </div>
  )
}

export default My_Projects