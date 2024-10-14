import React from 'react';
import './StylesStoryDetails.scss'

const StoriesDetails = ({ stories, tasks }) => {

  return (
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
  );
};

export default StoriesDetails;