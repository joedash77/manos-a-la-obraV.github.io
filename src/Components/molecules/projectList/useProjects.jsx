import { useState } from 'react';
import { useFetchResource, useFetchDeleteResource, addResource, updateResource } from '../../../utils/apiCalls';

export const useProjects = () => {
  const userId = localStorage.getItem('userID');

  const { resource: projects, loading, error, refetch } = useFetchResource(`projects/user/${userId}`);
  const { deleteResource } = useFetchDeleteResource();
  const [editingProject, setEditingProject] = useState(null); // Proyecto en edición
  const [showAddForm, setShowAddForm] = useState(false); // Formulario de agregar


  const addProject = async (projectData) => {
    try {
      await addResource(projectData, 'projects');
      setShowAddForm(false);
      refetch();
    } catch (err) {
      console.error('Error al agregar proyecto:', err);
      throw err;
    }
  };

  const updateProject = async (projectData) => {
    try {
      await updateResource(`projects/${projectData._id}`, projectData);
      setEditingProject(null);
      refetch();
    } catch (err) {
      console.error('Error al actualizar proyecto:', err);
      throw err;
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await deleteResource(`projects/${projectId}`);
      refetch();
    } catch (err) {
      console.error('Error al eliminar proyecto:', err);
      throw err;
    }
  };

  return {
    projects,
    loading,
    error,
    addProject,
    updateProject,
    deleteProject,
    editingProject,
    setEditingProject,
    showAddForm,
    setShowAddForm,
  };
};
