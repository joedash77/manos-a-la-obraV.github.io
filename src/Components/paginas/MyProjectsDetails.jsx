import { useParams } from 'react-router-dom'
import { dataList } from '../../Data/data';
import { Link } from 'react-router-dom';

function MyProjectsDetails() {
    const { projectId } = useParams();
    const project = dataList.find(p => p.id == parseInt(projectId));
    
    if(project.epics.length <= 0){
        return( //Faltaría agregar esta condicion pero q funcione bien (aca solo aparece una pantalla vacia con "NO EPICS FOUND!")
            <div>
                <h3>
                    No epics found!
                </h3>
            </div>
        )
    }

  return (
      <div>
        <h1>{project.name}</h1>
        <h1>{project.description}</h1>

        <h2>Epics</h2>
        {project.epics.map((epic) => (
            <ul>
                <li key={epic.id}> 
                    <Link to = {`/my-projects/${project.id}/epic/${epic.id}`} >{epic.name}</Link>
                </li>
            </ul>
        ))}
    </div>
  )
}

export default MyProjectsDetails