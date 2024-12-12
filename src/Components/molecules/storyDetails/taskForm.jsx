import React from 'react';
import CreateForm from '../FormTasks/CreateForm';

const TaskForm = ({ title, initialData, onSubmit, onClose }) => {
  const fields = [
    { name: 'name', label: 'Título' },
    { name: 'description', label: 'Descripción' },
    { name: 'due', label: 'Fecha de Finalización', type: 'date' },
    {
      name: 'done',
      label: 'Estado',
      type: 'select',
      options: [
        { value: false, label: 'Pendiente' },
        { value: true, label: 'Hecho' },
      ],
    },
  ];

  return (
    <CreateForm
      title={title}
      initialData={initialData}
      fields={fields}
      onSubmit={onSubmit}
      onClose={onClose}
    />
  );
};

export default TaskForm;
