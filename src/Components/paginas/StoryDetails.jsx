import React from 'react'
import { useParams } from 'react-router-dom';
import { addTaskToStory, useFetchStoriesSpecific, useFetchTasks } from '../../utils/apiCalls'
import Header from '../organisms/header/Header';
import LoadingSpinner from '../molecules/loadingSpinner/loadingSpinner';
import Storydetails from '../molecules/storyDetails/storyDetails'

function StoryDetails() {
  const { storyId } = useParams();

  const { stories, error: storiesError } = useFetchStoriesSpecific(storyId);
  const { tasks, error: tasksError } = useFetchTasks(storyId);

  const newTask = {
    story: storyId,
    name: 'nueva tarea',
    description: 'descripcion de la tarea',
    created: Date.now(),
    due: Date.now()
  }; 

  const handleClick = () => {
    try {
      const addedTask = addTaskToStory(newTask);
      console.log('Tarea agregada con éxito:', addedTask);
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  }

  if (tasksError || storiesError) {
    return <div>Error: {epicsError?.message || storiesError?.message}</div>;
  }

  if (!stories || !stories.name) {
    return <LoadingSpinner message="Cargando historia..." />;
  }
  
  return (
    <>
      <Header title={`Historia: ${stories.name}`} level={2} />
      <Storydetails stories={stories} tasks={tasks}/>
      <button onClick={handleClick}> Agregar Tarea</button>
    </>
  );
}

export default StoryDetails;