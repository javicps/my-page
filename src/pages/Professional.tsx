import React, { useEffect } from 'react'

const accolades = [
  {
    href: 'https://sysdig.com/blog/author/javier-martinez/',
    title: 'Technical articles for Sysdig',
    description: 'A collection of in-depth engineering articles published on the Sysdig blog.',
  },
  {
    href: 'https://sysdig.com/blog/debug-kubernetes-crashloopbackoff/',
    title: 'Debugging Kubernetes CrashLoopBackOff',
    description: 'Reached #1 rank on Google and was featured in several expert channels.',
  },
  {
    href: 'https://sysdig.com/blog/tales-from-the-kube/',
    title: 'Tales from the Kube!',
    description: 'Wrote the script for a comic-book brochure handed out at KubeCon 2023.',
  },
  {
    href: 'https://www.youtube.com/watch?v=cQkCOZWjXNs',
    title: 'Container Checkpointing talk',
    description:
      'Presented at Open Source Summit Europe together with Daniel Simionato.',
  },
  {
    href: 'https://apkcombo.com/es/jpod-15-zgz/com.lolquizz.jpod15zgz/',
    title: 'JPOD Android application',
    description: 'Developed the official app for JPOD, a podcasting event in Zaragoza.',
  },
]

const expertise = [
  'E-commerce',
  'CI/CD',
  'Kubernetes',
  'Observability',
  'Service-Oriented Architecture',
  'Team Leadership',
]

const Professional: React.FC = () => {
  useEffect(() => {
    document.title = 'Javier Martínez - Professional'
  }, [])

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-eyebrow">Professional</p>
        <h1>15+ years building and leading engineering teams</h1>
        <p className="page-lead">
          I'm Javier Martínez, a senior engineer with experience spanning
          e-commerce, CI/CD, Kubernetes, observability, and service-oriented
          architectures. I've worked in international roles, contributing to
          projects across diverse technical environments.
        </p>
      </div>

      <div className="stat-row">
        <div className="stat-card">
          <span className="stat-number">15+</span>
          <span className="stat-label">Years in engineering</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">8+</span>
          <span className="stat-label">Years leading IT teams</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">5</span>
          <span className="stat-label">Public talks &amp; publications</span>
        </div>
      </div>

      <p className="section-title">Areas of expertise</p>
      <ul className="tag-list">
        {expertise.map((skill) => (
          <li className="tag" key={skill}>
            {skill}
          </li>
        ))}
      </ul>

      <p className="section-title">Accolades</p>
      <div className="card-grid">
        {accolades.map((item) => (
          <div className="info-card" key={item.href}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Professional
