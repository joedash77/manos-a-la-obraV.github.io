import { useParams } from 'react-router-dom'
import ProjectDetails from '../molecules/projectDetails/projectDetails'
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import Header from '../organisms/header/Header';
import { useFetchResource } from '../../utils/apiCalls'

function MyProjectsDetails() {
  const { projectId } = useParams();
  const { resource: projects, error: projectError, loading:loadingProjects } = useFetchResource(`projects/${projectId}`);
  const { resource: epics, error: epicError, loading:loadingEpics } = useFetchResource(`projects/${projectId}/epics`);

  if (projectError || epicError) {
    return <div>Error: {projectError?.message || epicError?.message}</div>;
  }

  if (loadingProjects && loadingEpics) {
    return <LoadingSpinner message="Cargando proyecto..." />;
  }

  return (
    <>
      <Header title={`Proyecto: ${projects.name}`} level={2} />
      <ProjectDetails projects={projects} epics={epics}/>
      </>
  );
}

export default MyProjectsDetails