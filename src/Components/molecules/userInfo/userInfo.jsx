import React from 'react'
import { useFetchResource } from '../../../utils/apiCalls';
import './userInfo.css'

function userInfo({userId}) {
  // Usamos la función personalizada para buscar el usuario por su _id
  const { resource: user, loading, error } = useFetchResource(`users/${userId}`);

  console.log(user)
  if (loading) return <p>Cargando datos del usuario...</p>;
  if (error) return <p>Error al cargar los datos del usuario: {error.message}</p>;


  const handleLogout = () => {
    // Elimina el token y el userId del localStorage
    localStorage.removeItem('userID');
    localStorage.removeItem('token');
    // Refresca la página
    window.location.reload();
  };

  return (
    <div className="user-profile-container">
      <h2 className='user-profile'>Perfil de Usuario</h2>
      {user ? (
        <ul className="user-details-list">
            <li className="user-detail-item">
            <strong>Email:</strong> <span>{user.email}</span>
            </li>
            <li className="user-detail-item">
            <strong>Usuario:</strong> <span>{user.username}</span>
            </li>
        </ul>
        ) : (
        <p>No se encontraron datos del usuario.</p>
        )}

        <div className="logout-button-container">
            <button className="logout-button" onClick={handleLogout}>
            Cerrar Sesión
            </button>
        </div>

    </div>
  );
}

export default userInfo