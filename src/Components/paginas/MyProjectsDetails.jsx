import { useParams } from 'react-router-dom'
import { dataList } from '../../Data/data';
import { Link } from 'react-router-dom';
import Header from '../organisms/header/Header';
import './ProyectDetails.css';

function MyProjectsDetails() {
    const { projectId } = useParams();
    const project = dataList.find(p => p.id == parseInt(projectId));
    
    if (project.epics.length <= 0) {
      return (
        <div className="no-epics-container">
          <h3 className="no-epics-message">
            No epics found!
          </h3>
        </div>
      );
    }
  
    return (
      <>
        <Header title={`Proyecto: ${project.name}`} level={2} />
        <div className="project-details-wrapper">
          <div className="project-info">
            <h1 className="project-name">{project.name}</h1>
            <hr className="divider" />
            <p className="project-description">{project.description}</p>
            <h2 className="epics-title">Epicas</h2>
            <ul className="epics-list">
              {project.epics.map((epic) => (
                <li key={epic.id} className="epic-item">
                  <Link
                    to={`/my-projects/${project.id}/epic/${epic.id}`}
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