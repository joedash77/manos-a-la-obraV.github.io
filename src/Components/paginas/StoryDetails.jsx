import React from 'react'
import { useParams } from 'react-router-dom';
import { dataList } from '../../Data/data';
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';
import './StylesStoryDetails.scss'

function StoryDetails() {
  const { projectId, epicId, storyId } = useParams();
  const project = dataList.find(p => p.id == parseInt(projectId));
  const epics = project.epics.find(epic => epic.id == parseInt(epicId));
  const story = epics.stories.find(s => s.id == parseInt(storyId));
  
  return (
    <>
      <Header title={`Historia: ${story.name}`} level={2} />
      <div className="story-page-container">
        <div className="story-container">
          <h1 className="story-title">{story.name}</h1>
          <hr className="divider" />
          <p className="story-description">{story.description}</p>
    
          <h2 className="story-subtitle">Tareas</h2>
          <ul className="task-list">
            {story.task.map((t) => (
              <li key={t.id} className="task-item">
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