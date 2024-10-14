import React from 'react'
import Header from '../organisms/header/Header'
import { useFetchStories } from '../../utils/apiCalls'
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import Stories from '../molecules/story/story'


function Story() {
  const { stories, error: storiesError } = useFetchStories(); // Hook para obtener historias

  if (storiesError) {
    return <div>Error: {storiesError.message}</div>;
  }

  const a = stories.length - 1;
  if (!stories[a]) {
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