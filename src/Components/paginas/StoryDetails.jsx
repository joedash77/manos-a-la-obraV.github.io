import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../organisms/header/Header';
import './StylesStoryDetails.scss'

function StoryDetails() {
  const { storyId } = useParams();
  const [stories, setStories] = useState([]);
  const [tasks, setTasks] = useState([]);

  const header = {
    'Content-Type': 'application/json',
    'auth': localStorage.getItem('token')
  }

  useEffect(() => {
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/stories/${storyId}`, 
      {
        method: 'GET',
        headers: header
      })
    .then(respones => respones.json())
    .then(data => setStories(data.data))
  }, []);

  useEffect(() => {
    fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/stories/${storyId}/tasks`, {
      method: 'GET',
      headers: header
    })
    .then(response => response.json())
    .then(data => setTasks(data.data))
  }, []);

  
  return (
    <>
      <Header title={`Historia: ${stories.name}`} level={2} />
      <div className="story-page-container">
        <div className="story-container">
          <h1 className="story-title">{stories.name}</h1>
          <hr className="divider" />
          <p className="story-description">{stories.description}</p>
          <h2 className="story-subtitle">Tareas</h2>
          <ul className="task-list">
            {tasks.map((t) => (
              <li key={t._id} className="task-item">
                <span className="task-name">{t.name}:</span>
                <span className="task-description"> {t.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default StoryDetails;