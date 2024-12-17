import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { stories } from '../data/storiesData';
import WrittenText from '../components/WrittenText';

const StoryPage = () => {
  const { id } = useParams(); // Get 'id' from the route
  const story = stories.find((story) => story.id === id);


  if (!story) {
    return <h1>Story not found</h1>;
  }

  return (
    <WrittenText title={story.title} content={story.content}/>
  );
};

export default StoryPage;
