import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';
import './StylesEpic.css';

function EpicDetails() {
    const { epicId } = useParams();
    const [epics, setEpics] = useState([]);
    const [stories, setStories] = useState([]);

    const header = {
      'Content-Type': 'application/json',
      'auth': localStorage.getItem('token')
    }

    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}`, 
        {
          method: 'GET',
          headers: header
        })
      .then(respones => respones.json())
      .then(data => setEpics(data.data))
    }, []);

    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/epics/${epicId}/stories`, {
        method: 'GET',
        headers: header
      })
      .then(response => response.json())
      .then(data => setStories(data.data))
    }, []);

    return (
      <>
          <Header title={`Epica: ${epics.name}`} level={2} />
          <div className="epica-container">
          <h1 className="epica-title">{epics.name}</h1>
          <hr className="divider" />
          <p className="epica-description">{epics.description}</p>
    
          <h2 className="epics-subtitle">Historias</h2>
          <ul className="epics-list">
            {stories.map((story) => (
              <li key={story._id} className="epic-story-item">
                <Link
                  to={`/stories/${story._id}/tasks`}
                  className="epic-story-link"
                >
                  {story.name}
                  {story.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
export default EpicDetails;