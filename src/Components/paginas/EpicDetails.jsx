import React from 'react'
import { useParams } from 'react-router-dom';
import { dataList } from '../../Data/data';
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';

function EpicDetails() {
    const { projectId, epicId } = useParams();
    const project = dataList.find(p => p.id == parseInt(projectId));
    const epics = project.epics.find(epic => epic.id == parseInt(epicId));
    
  return (
      <div>
        <Header title={`Epica: ${epics.name}`} level = {2}/>
        <h1>{epics.name}</h1>
        <h1>{epics.description}</h1>

        <h2>Epics</h2>
        {epics.stories.map((story) => (
            <li key={story.id}> 
                <Link to = {`/my-projects/${project.id}/epic/${epics.id}/story/${story.id}`} >{story.name}</Link>
            </li>
        ))}
    </div>
  )
}

export default EpicDetails;