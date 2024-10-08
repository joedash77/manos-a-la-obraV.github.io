import React from 'react'
import Header from '../organisms/header/Header'
import { dataList } from '../../Data/data'
import { Link } from 'react-router-dom'

function Story() {
  const projectList = dataList.map(project => (
    <div key={project.id}>
      {project.epics.map(epic => (
        <ul key={epic.id}>
          {epic.stories.map(story => (
            <li key={story.id}>
              <Link to = {`/my-projects/${project.id}/epic/${epic.id}/story/${story.id}`} >{story.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  ))

  return (
    <div>
      <Header title='Mis historias' level = {2}/>
      {projectList}
    </div>
  )
}

export default Story