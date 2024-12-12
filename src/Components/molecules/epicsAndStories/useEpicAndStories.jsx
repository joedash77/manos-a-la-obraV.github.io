import { useState } from 'react';
import { useFetchResource, useFetchDeleteResource, addResource, updateResource } from '../../../utils/apiCalls';

export const useEpicAndStories = (epicId) => {
  
  const { resource: stories, loading, error, refetch } = useFetchResource(`epics/${epicId}/stories`);
  const { deleteResource } = useFetchDeleteResource();
  const [editingStorie, setEditingStorie] = useState(null); 
  const [showAddForm, setShowAddForm] = useState(false); 

  const addStorie = async (storieData) => {
    try {
      await addResource(storieData, `stories`);
      setShowAddForm(false);
      refetch();
    } catch (err) {
      console.error('Error al agregar storie:', err);
      throw err;
    }
  };

  const updateStorie = async (storieData) => {
    try {
      await updateResource(`stories/${storieData._id}`, storieData);
      setEditingStorie(null);
      refetch();
    } catch (err) {
      console.error('Error al actualizar la storie:', err);
      throw err;
    }
  };

  const deleteStorie = async (storieId) => {
    try {
      await deleteResource(`stories/${storieId}`);
      refetch();
    } catch (err) {
      console.error('Error al eliminar épica:', err);
      throw err;
    }
  };



  return {
    stories,
    loading,
    error,
    addStorie,
    updateStorie,
    deleteStorie,
    editingStorie,
    setEditingStorie,
    showAddForm,
    setShowAddForm,
  };
};