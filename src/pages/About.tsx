import React, { useEffect } from 'react'

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'Javier Martínez - About'
  }, [])

  return (
    <div className="free-text">
      <h1>About Me</h1>
      <p>Hi, I&#39;m Javier Martinez. Welcome to my page.</p>
      <p>I&#39;m a senior engineer based in Zaragoza, father of two.</p>
      <p>I love tech, podcasts and writing fantasy fiction.</p>
    </div>
  )
}

export default About
