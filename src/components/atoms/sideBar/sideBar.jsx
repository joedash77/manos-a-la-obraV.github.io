import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import BotonVolver from './BotonVolver.jsx'
import BotonCerrar from './BotonCerrar';
import { useFetchResource } from '../../../utils/apiCalls.js';

export default function SideBar({ isOpen, toggleSidebar, level }) {
  const closeSidebar = () => {
      toggleSidebar();
  };

  const userId = localStorage.getItem('userID');
  const { resource: user, loading, error } = useFetchResource(`users/${userId}`);

  return (
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
          <div className="button-container">
              <BotonVolver level={level} closeSidebar={closeSidebar} />
              <BotonCerrar closeSidebar={closeSidebar} />
          </div>
          {/* Sección Nav */}
          <nav className="nav-links">
              <ul>
                  <li>
                      <Link to="/Home" onClick={closeSidebar}>Menu</Link>
                  </li>
                  <li>
                      <Link to="/projects" onClick={closeSidebar}>Mis Proyectos</Link>
                  </li>
                  <li>
                      <Link to="/stories/" onClick={closeSidebar}>Mis Historias</Link>
                  </li>
              </ul>
          </nav>

          {/* User Profile Link */}
          <div className="user-profile">
<<<<<<< HEAD
              <Link to="/Settings" onClick={closeSidebar}>Configuración de usuario</Link>
              <p>Usuario: {user.username}</p>
=======
              <Link to="/Settings" onClick={closeSidebar}>Configuracion de usuario</Link>
              <p>Usuario: John Doe</p>
>>>>>>> 22b7f7cf3f1734893e4c6bbc1c0734425d741f24
          </div>
      </div>
  );
}