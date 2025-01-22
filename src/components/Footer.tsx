import React from 'react'
import { PAGE_MODE } from '../constants/PageMode'
import { FooterProps } from '../constants/Types'

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Footer({ pageMode, togglePageMode }: FooterProps) {
  const handleClick = () => {
    togglePageMode()
  }
  const dark = pageMode === PAGE_MODE.DARK ? 'dark-mode' : 'light-mode'

  return (
    <footer className={`footer ${dark}`}>
      <p>© {new Date().getFullYear()} Javier Martínez. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/javier-martinez-2b2a955/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/javiermartp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com/javicps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <button className={`dark-mode-toggle ${dark}`} onClick={togglePageMode}>
        Dark Mode: {pageMode === PAGE_MODE.DARK ? 'on' : 'off'}
      </button>
    </footer>
  )
}
