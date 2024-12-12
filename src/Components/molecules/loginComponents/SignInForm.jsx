import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Ejecuta la función onSubmit desde el componente padre
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-inputs">
      <input
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="login-input"
        />
        <input
          placeholder="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="login-input"
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
        />
      </div>
      <button type="submit" className="login-button">
        Sign in
      </button>
    </form>
  );
}