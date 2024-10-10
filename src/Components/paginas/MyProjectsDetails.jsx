import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';
import './ProyectDetails.css';
import { useEffect, useState } from 'react';

function MyProjectsDetails() {
    const { projectId } = useParams();
    const [projects, setProjects] = useState([]);
    const [epics, setEpics] = useState([]);

    const header = {
      'Content-Type': 'application/json',
      'auth': localStorage.getItem('token')
    }
  
    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}`, 
        {
          method: 'GET',
          headers: header
        })
      .then(respones => respones.json())
      .then(data => setProjects(data.data))
    }, []);

    useEffect(() => {
      fetch(`https://lamansysfaketaskmanagerapi.onrender.com/api/projects/${projectId}/epics`, {
        method: 'GET',
        headers: header
      })
      .then(response => response.json())
      .then(data => setEpics(data.data))
    }, []);
  
    return (
      <>
        <Header title={`Proyecto: ${projects.name}`} level={2} />
        <div className="project-details-wrapper">
          <div className="project-info">
            <h1 className="project-name">{projects.name}</h1>
            <hr className="divider" />
            <p className="project-description">{projects.description}</p>
            <h2 className="epics-title">Epicas</h2>
            <ul className="epics-list">
              {epics.map((epic) => (
                <li key={epic._id} className="epic-item">
                  <Link
                    to={`/epics/${epic._id}/stories`}
                    className="epic-link"
                  >
                    {epic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </>
    );
  }

export default MyProjectsDetails