import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import BotonVolver from './BotonVolver.jsx'
import BotonCerrar from './BotonCerrar';

export default function SideBar({ isOpen, toggleSidebar, level }) {
  const closeSidebar = () => {
      toggleSidebar();
  };

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
                      <Link to="/Home" onClick={closeSidebar}>Home</Link>
                  </li>
                  <li>
                      <Link to="/my-projects" onClick={closeSidebar}>My Projects</Link>
                  </li>
                  <li>
                      <Link to="/my-projects/epic/story" onClick={closeSidebar}>My Stories</Link>
                  </li>
              </ul>
          </nav>

          {/* User Profile Link */}
          <div className="user-profile">
              <Link to="/Settings" onClick={closeSidebar}>Configuración de usuario</Link>
              <p>Usuario: John Doe</p>
          </div>
      </div>
  );
}