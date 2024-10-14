import React from 'react'
import Header from '../organisms/header/Header'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Story() {
  const [stories, setStories] = useState([]);

  const header = {
    'Content-Type': 'application/json',
    'auth': localStorage.getItem('token')
  }

  useEffect(() => {
    fetch('https://lamansysfaketaskmanagerapi.onrender.com/api/stories', 
      {
        method: 'GET',
        headers: header
      })
    .then(respones => respones.json())
    .then(data => setStories(data.data))
  }, []);
  
  const projectList = stories.map((stories) => (
    <li key={stories._id} className="project-item">
      <Link to={`/stories/${stories._id}/tasks`} className="project-link">
        <h3 className="project-name">{stories.name}</h3>
        <p className="project-description">{stories.description}</p>
      </Link>
    </li>
  ));

  return (
    <>
      <Header title='Mis historias' level={2} />
      <div className="story-list">
        {projectList}
      </div>
    </>
  );
}

export default Story