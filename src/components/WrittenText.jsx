import React from 'react'

export default function WrittenText({title, content}) {
  return (
    <div className="written-text">
        <h1>{title}</h1>
        <div>
            {content}
        </div>
    </div>
  )
}