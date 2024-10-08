import React from 'react'
import { useParams } from 'react-router-dom';
import { dataList } from '../../Data/data';
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';

function StoryDetails() {
  const { projectId, epicId, storyId } = useParams();
  const project = dataList.find(p => p.id == parseInt(projectId));
  const epics = project.epics.find(epic => epic.id == parseInt(epicId));
  const story = epics.stories.find(s => s.id == parseInt(storyId));
  
return (
    <div>
      <Header title={`Historia: ${story.name}`} level = {2}/>
      <h1>{story.name}</h1>
      <h1>{story.description}</h1>

      <h2>Historia</h2>
      {story.task.map((t) => (
          <li key={t.id}> 
              {t.name}: {t.description}
          </li>
      ))}
  </div>
)
}

export default StoryDetails;