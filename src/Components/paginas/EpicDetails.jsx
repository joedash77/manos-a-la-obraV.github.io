import React from 'react'
import { useParams } from 'react-router-dom';
import { dataList } from '../../Data/data';
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';
import './StylesEpic.css';

function EpicDetails() {
    const { projectId, epicId } = useParams();
    const project = dataList.find(p => p.id == parseInt(projectId));
    const epics = project.epics.find(epic => epic.id == parseInt(epicId));
    
    return (
      <div className="epica-container">
        <Header title={`Epica: ${epics.name}`} level={2} />
        
        <h1 className="epica-title">{epics.name}</h1>
        <p className="epica-description">{epics.description}</p>
  
        <h2 className="epics-subtitle">Historias</h2>
        <ul className="epics-list">
          {epics.stories.map((story) => (
            <li key={story.id} className="epic-story-item">
              <Link
                to={`/my-projects/${project.id}/epic/${epics.id}/story/${story.id}`}
                className="epic-story-link"
              >
                {story.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default EpicDetails;