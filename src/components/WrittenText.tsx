import React from 'react'
import { WrittenTextProps } from '../constants/Types'

const WrittenText: React.FC<WrittenTextProps> = ({
  title,
  content,
}: WrittenTextProps) => {
  return (
    <div className="written-text">
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  )
}

export default WrittenText
