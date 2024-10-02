import React from 'react'
import AppLogo from '../appLogo/appLogo.jsx'
import './styles.css'

export default function sideBar({ isOpen, toggleSidebar }) {
  return (
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        <div className="app-logo">
          
        </div>

        {/* Sección Nav */}
        <nav className="nav-links">
          <ul>
            <li><a href="#home" onClick={toggleSidebar}>Home</a></li>
            <li><a href="#projects" onClick={toggleSidebar}>My Projects</a></li>
            <li><a href="#stories" onClick={toggleSidebar}>My Stories</a></li>
          </ul>
        </nav>

        {/* User Profile Link */}
        <div className="user-profile">
          <p>Usuario: John Doe</p>
          <a href="#user-settings" onClick={toggleSidebar}>Configuración de usuario</a>
        </div>
      </div>
  )
}
