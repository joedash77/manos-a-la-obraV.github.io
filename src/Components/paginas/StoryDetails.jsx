import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetchResource } from '../../utils/apiCalls'
import Header from '../organisms/header/Header';
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import Storydetails from '../molecules/storyDetails/storyDetails'

function StoryDetails() {
  const { storyId } = useParams();
  
  const { resource:stories, error: storiesError, loading:loadingStories } = useFetchResource(`stories/${storyId}`);
  const { resource:tasks, error: tasksError, loading:loadingTasks } = useFetchResource(`stories/${storyId}/tasks`);

  console.log(tasks)

  if (tasksError || storiesError) {
    return <div>Error: {tasksError?.message || storiesError?.message}</div>;
  }

  if (loadingStories && loadingTasks) {
    return <LoadingSpinner message="Cargando historias..." />;
  }
  
  return (
    <>
      <Header title={`Historia: ${stories.name}`} level={2} />
      <Storydetails stories={stories} tasks={tasks}/>
    </>
  );
}

export default StoryDetails;