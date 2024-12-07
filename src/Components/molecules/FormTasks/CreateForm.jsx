import React, { useState } from 'react';
import './createForm.css'; // Importar estilos

function CreateForm({ title, initialData, fields, onSubmit, onClose }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    setFormData(initialData);
  };

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
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder || ''}
              className="create-form-input"
            />
          </div>
        ))}
        <button type="submit" className="create-form-button">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
