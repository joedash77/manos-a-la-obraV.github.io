import React, { useState } from 'react';
import './createForm.css'; // Importar estilos

function CreateForm({ title, initialData, fields, onSubmit, onClose }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'select-one' ? JSON.parse(value) : value, // Convierte "true"/"false" de string a boolean
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData); // Llama a la función para crear o editar el recurso
    setFormData(initialData); // Reinicia el formulario después de enviar
  };

  const isEditMode = !!initialData._id; // Determina si es edición o creación

  return (
    <div className="create-form-container">
      <div className="create-form-header">
        <h2 className="create-form-title">{title}</h2>
        <button className="close-button" onClick={onClose} title="Cerrar formulario">
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.name} className="create-form-field">
            <label className="create-form-label">{field.label}</label>
            {field.type === 'select' ? (
              <select
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="create-form-select"
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder || ''}
                className="create-form-input"
              />
            )}
          </div>
        ))}
        <button type="submit" className="create-form-button">
          {isEditMode ? 'Editar' : 'Agregar'}
        </button>
      </form>
    </div>
  );
}
export default CreateForm;
