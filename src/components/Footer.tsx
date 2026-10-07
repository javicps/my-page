import React from 'react'
import { PAGE_MODE } from '../constants/PageMode'
import { FooterProps } from '../constants/Types'

import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer: React.FC<FooterProps> = ({
  pageMode,
  togglePageMode,
}: FooterProps) => {
  const isDark = pageMode === PAGE_MODE.DARK

  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/javier-martinez-2b2a955/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href="https://twitter.com/javiermartp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="https://github.com/javicps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={18} />
        </a>
      </div>
      <button
        className="theme-toggle"
        onClick={togglePageMode}
        aria-pressed={isDark}
      >
        {isDark ? '🌙 Dark' : '☀️ Light'}
      </button>
      <p>© {new Date().getFullYear()} Javier Martínez. All rights reserved.</p>
    </footer>
  )
}
export default Footer
