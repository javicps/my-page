import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { stories } from "../data/storiesData";
import WrittenText from "../components/WrittenText";
import { motion } from "framer-motion";

const getStory = (id) => {
  return stories.find((story) => story.id === id);
};

const StoryPage = () => {
  const { id } = useParams(); // Get 'id' from the route
  const story = getStory(id);

  useEffect(() => {
    document.title = `Javier Martínez - ${story.title}`;
  }, []);

  if (!story) {
    return <h1>Story not found</h1>;
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
  );
};

export default StoryPage;
