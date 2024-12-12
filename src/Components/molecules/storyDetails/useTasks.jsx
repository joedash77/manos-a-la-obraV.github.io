import { useFetchDeleteResource, useFetchResource, addResource, updateResource } from '../../../utils/apiCalls';
import { useState } from 'react';

export const useTasks = (storyId) => {
  const { resource: tasks, loading, error, refetch } = useFetchResource(`stories/${storyId}/tasks`);;
  const { deleteResource } = useFetchDeleteResource();
  const [editingTask, setEditingTask] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addTask = async (taskData) => {
    try {
      console.log(taskData)
      await addResource(taskData, 'tasks');
      setShowAddForm(false);
      refetch();
    } catch (err) {
      console.error('Error al agregar tarea:', err);
      throw err;
    }
  };

  const updateTask = async (taskData) => {
    try {
      await updateResource(`tasks/${taskData._id}`, taskData);
      setEditingTask(null);
      refetch();
    } catch (err) {
      console.error('Error al actualizar tarea:', err);
      throw err;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await deleteResource('tasks', taskId);
      refetch();
    } catch (err) {
      console.error('Error al eliminar tarea:', err);
      throw err;
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    updateTask,
    deleteTask,
    editingTask,
    setEditingTask,
    showAddForm,
    setShowAddForm,
  };
};