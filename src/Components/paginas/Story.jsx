import React from 'react'
import Header from '../organisms/header/Header'
import { useFetchResource } from '../../utils/apiCalls'
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import Stories from '../molecules/story/story'


function Story() {
  const { resource:stories, error: storiesError, loading:loading } = useFetchResource('stories'); // Hook para obtener historias

  if (storiesError) {
    return <div>Error: {storiesError.message}</div>;
  }

  if (loading) {
    return <LoadingSpinner message="Cargando historias..." />;
  }

  return (
    <>
      <Header title='Mis historias' level={2} />
      <Stories stories={stories}/>
    </>
  );
}

export default Story