import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="brand" end>
          Javier Martínez
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/professional"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Professional
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/writing"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Writing (ES)
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
