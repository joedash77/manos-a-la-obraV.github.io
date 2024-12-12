import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../molecules/loginComponents/SignInForm'
import LoginMessage from '../molecules/loginComponents/loginMessage';
import { signInUser } from '../../utils/login';
import '../molecules/loginComponents/login.css';

export default function Login() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const data = await signInUser(formData);
      setMessage('Registro exitoso. Redirigiendo...');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage(error.message);  // Mostrar el mensaje de error si ocurre
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Sign in</h1>
        <p className="login-description">Please enter the information to create the account</p>
        <SignInForm onSubmit={handleLogin} />
        <LoginMessage message={message} />
      </div>
    </div>
  );
}