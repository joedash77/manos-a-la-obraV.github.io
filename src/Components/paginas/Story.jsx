import React from 'react'
import Header from '../organisms/header/Header'
import { dataList } from '../../Data/data'
import { Link } from 'react-router-dom'
import './StylesStory.css'

function Story() {
  const projectList = dataList.map(project => (
    <div className="contenedor-lista" key={project.id}>
      {project.epics.map(epic => (
        <ul className="contenedor-story" key={epic.id}>
          {epic.stories.map(story => (
            <li className="historia" key={story.id}>
              <Link to={`/my-projects/${project.id}/epic/${epic.id}/story/${story.id}`} className="story-link">
                {story.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
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