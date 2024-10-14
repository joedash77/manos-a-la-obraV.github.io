import Header from '../organisms/header/Header';
import ProyectList from '../molecules/projectList/projectListComponent';
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import { useFetchProjects } from '../../utils/apiCalls';

function MyProjects() {
  const { projects, error: projectsError } = useFetchProjects(); // Hook para obtener los proyectos

  if (projectsError) {
    return <div>Error: {projectsError.message}</div>; 
  }

  const a = projects.length - 1;
  if (!projects[a]) {
    return <LoadingSpinner message="Cargando proyectos..." />;
  }
  
  return (
    <>
      <Header title='Mis Proyectos' level={2} />
      <ProyectList projects={projects}/>
    </>
  );
}

export default MyProjects