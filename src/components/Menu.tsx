import React from 'react'
import { Link } from 'react-router-dom'
import { PAGE_MODE } from '../constants/PageMode'
import { MenuProps, PageMode } from '../constants/Types'

const Menu: React.FC<MenuProps> = ({ currentMode }: MenuProps) => {
  const dark = currentMode === PAGE_MODE.DARK ? 'dark-mode' : 'light-mode'

  return (
    <header className={`header ${dark}`}>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/professional">Professional</Link>
          </li>
          <li>
            <Link to="/writing">Writing (ES)</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
