import { useState } from 'react';
import { useFetchResource, useFetchDeleteResource, addResource, updateResource } from '../../../utils/apiCalls';

export const useEpics = (projectId) => {
  
  const { resource: epics, loading, error, refetch } = useFetchResource(`projects/${projectId}/epics`);
  const { deleteResource } = useFetchDeleteResource();
  const [editingEpic, setEditingEpic] = useState(null); // Épica en edición
  const [showAddForm, setShowAddForm] = useState(false); // Formulario de agregar

  const addEpic = async (epicData) => {
    try {
      await addResource(epicData, `epics`);
      setShowAddForm(false);
      refetch();
    } catch (err) {
      console.error('Error al agregar épica:', err);
      throw err;
    }
  };

  const updateEpic = async (epicData) => {
    try {
      await updateResource(`epics/${epicData._id}`, epicData);
      setEditingEpic(null);
      refetch();
    } catch (err) {
      console.error('Error al actualizar épica:', err);
      throw err;
    }
  };

  const deleteEpic = async (epicId) => {
    try {
      await deleteResource(`epics/${epicId}`);
      refetch();
    } catch (err) {
      console.error('Error al eliminar épica:', err);
      throw err;
    }
  };

  return {
    epics,
    loading,
    error,
    addEpic,
    updateEpic,
    deleteEpic,
    editingEpic,
    setEditingEpic,
    showAddForm,
    setShowAddForm,
  };
};
