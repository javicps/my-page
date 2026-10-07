import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Writing: React.FC = () => {
  useEffect(() => {
    document.title = 'Javier Martínez - Writing'
  }, [])

  const stories = [
    { title: 'La ley del desierto', slug: 'laleydeldesierto' },
    {
      title: 'La inevitable soledad de Henrietta Penbroke',
      slug: 'inevitablesoledad',
    },
    {
      title: 'Entre los muertos habrá siempre una lengua viva',
      slug: 'entrelosmuertos',
    },
    { title: 'Desyat', slug: 'desyat' },
    { title: 'Seguir las luces', slug: 'seguirlasluces' },
  ]

  return (
    <div className="page">
      <div className="page-header">
        <p className="page-eyebrow">Writing</p>
        <h1>My Writing</h1>
        <p className="page-lead">
          This is a collection of short fiction stories I wrote (in Spanish).
          <br />
          Esta es una selección de relatos cortos que he escrito (en Español).
        </p>
      </div>
      <div className="story-list">
        {stories.map((story, index) => (
          <div className="story-card" key={index}>
            <Link to={`/writing/${story.slug}`}>{story.title}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Writing
