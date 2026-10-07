import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { stories } from '../data/storiesData'
import { motion } from 'framer-motion'
import WrittenText from '../components/WrittenText'

const getStory = (id) => {
  return stories.find((story) => story.id === id)
}

const StoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>() // Get 'id' from the route
  const story = getStory(id)

  useEffect(() => {
    if (story) {
      document.title = `Javier Martínez - ${story.title}`
    }
  }, [story])

  if (!story) {
    return (
      <div className="free-text">
        <h1>Story not found</h1>
      </div>
    )
  }

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="story-page">
        <Link to="/writing" className="back-link">
          ← Back to writing
        </Link>
      </div>
      <WrittenText {...story} />
    </motion.div>
  )
}

export default StoryPage
