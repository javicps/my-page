import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
    return <h1>Story not found</h1>
  }

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <WrittenText {...story} />
    </motion.div>
  )
}

export default StoryPage
