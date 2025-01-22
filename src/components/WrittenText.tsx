import React from 'react'

type WrittenTextProps = {
  title: string
  content: string
}

export default function WrittenText({ title, content }: WrittenTextProps) {
  return (
    <div className="written-text">
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  )
}
