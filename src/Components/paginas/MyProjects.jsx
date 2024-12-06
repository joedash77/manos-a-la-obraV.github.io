import Header from '../organisms/header/Header';
import ProyectList from '../molecules/projectList/projectListComponent';
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import { useFetchResource } from '../../utils/apiCalls';

function MyProjects() {
  const { resource:projects, error: projectsError, loading:loading } = useFetchResource('projects'); // Hook para obtener los proyectos

  if (projectsError) {
    return <div>Error: {projectsError.message}</div>; 
  }

  if (loading) {
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