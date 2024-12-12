import React from 'react';
import './StylesStory.css'
import { Link } from 'react-router-dom'

const Story = ({ stories }) => {

  return (
    <div className="story-list">
      {stories.map((stories) => (
        <li key={stories._id} className="project-item">
          <Link to={`/stories/${stories._id}/tasks`} className="storys-link">
            <h3 className="storys-name">{stories.name}</h3>
          </Link>
          <p className="storys-description">{stories.description}</p>
        </li>))}
    </div>
  );
};

export default Story;