import { useParams } from 'react-router-dom';
import Header from '../organisms/header/Header';
import EpicsAndStories from '../molecules/epicsAndStories/epicsAndStories.jsx'
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import { useFetchResource } from '../../utils/apiCalls'

function EpicDetails() {
  const { epicId } = useParams(); // Obtener el parámetro `epicId` de la URL
  const { resource:epics, error: epicsError, loading:loadingEpics } = useFetchResource(`epics/${epicId}`); // Hook para obtener épicas
  const { resource:stories, error: storiesError, loading:loadingStories } = useFetchResource(`epics/${epicId}/stories`); // Hook para obtener historias

  if (epicsError || storiesError) {
    return <div>Error: {epicsError?.message || storiesError?.message}</div>;
  }

  if (loadingEpics && loadingStories) {
    return <LoadingSpinner message="Cargando epica..." />; // Mostrar un indicador de carga si los datos no están listos
  }

    return (
      <>
        <Header title={`Epica: ${epics.name}`} level={2} />
        <EpicsAndStories epics={epics} stories={stories}/>
      </>
    );
  }

export default EpicDetails;