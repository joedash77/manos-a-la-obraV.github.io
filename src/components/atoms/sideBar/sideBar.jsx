import React from 'react'
import AppLogo from '../appLogo/appLogo.jsx'
import { Link } from 'react-router-dom'
import './styles.css'
import appLogo from '../appLogo/appLogo.jsx'
import BotonVolver from './BotonVolver.jsx'

export default function sideBar({ isOpen, toggleSidebar, level }) {
  return (
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        <BotonVolver level={level} />
        {/* Sección Nav */}
        <nav className="nav-links">
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/my-projects" onClick={toggleSidebar}>My Projects</Link></li>
            <li><Link to="/my-projects/epic/story" onClick={toggleSidebar}>My Stories</Link></li>
          </ul>
        </nav>

        {/* User Profile Link */}
        <div className="user-profile">
          <Link to="/Settings" onClick={toggleSidebar}>Configuración de usuario</Link>
          <p>Usuario: John Doe</p>
        </div>
      </div>
  )
}
