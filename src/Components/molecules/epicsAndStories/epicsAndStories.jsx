import React from 'react';
import { Link } from 'react-router-dom';
import './StylesEpic.css'

const EpicsAndStories = ({ epics, stories }) => {
  return (
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
              <div className="story-info">
                <span className="story-name">{story.name}</span>
                <span className="story-description">{story.description}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpicsAndStories;