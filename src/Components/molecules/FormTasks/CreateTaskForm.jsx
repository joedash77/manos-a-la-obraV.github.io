import React, { useState } from 'react'

function CreateTaskForm() {
  const [formData, setFormData] = useState({
    taskTitle: '',
    taskDescription: '',
    taskCreatedDate: Date.now() 
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        +
      </button>
    </form>
  )
}

export default CreateTaskForm;