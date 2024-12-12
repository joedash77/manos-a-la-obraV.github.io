import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../molecules/loginComponents/loginForm';
import LoginMessage from '../molecules/loginComponents/loginMessage';
import { loginUser } from '../../utils/login';
import '../molecules/loginComponents/login.css';

export default function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await loginUser(formData);
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('userID', data.data.user._id); // Asegúrate de usar _id aquí
      setMessage('Login exitoso. Redirigiendo...');

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setMessage(error.message);  // Mostrar el mensaje de error si ocurre
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Login</h1>
        <p className="login-description">Please enter your login and password</p>
        <LoginForm onSubmit={handleLogin} />
        <LoginMessage message={message} />
      </div>
    </div>
  );
}
