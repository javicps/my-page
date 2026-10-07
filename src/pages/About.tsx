import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Javier Martínez - About'
  }, [])

  return (
    <div className="hero">
      <div className="hero-avatar">JM</div>
      <p className="hero-eyebrow">Senior Software Engineer · Zaragoza, Spain</p>
      <h1>Hi, I'm Javier Martínez.</h1>
      <p className="hero-subtitle">
        I build resilient, service-oriented systems and lead the teams that
        ship them. Outside of work, I'm a tech podcast enthusiast, a father of
        two, and a fantasy fiction writer.
      </p>

      <ul className="tag-list">
        <li className="tag">Kubernetes</li>
        <li className="tag">CI/CD</li>
        <li className="tag">Observability</li>
        <li className="tag">E-commerce</li>
        <li className="tag">Team Leadership</li>
      </ul>

      <div className="hero-actions">
        <Link to="/professional" className="btn btn-primary">
          View my work
        </Link>
        <a
          href="https://www.linkedin.com/in/javi-mart%C3%ADnez-2b2a955/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Get in touch
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://www.linkedin.com/in/javi-mart%C3%ADnez-2b2a955/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://github.com/javicps"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
        </a>
      </div>
    </div>
  )
}

export default About
