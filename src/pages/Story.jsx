import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { stories } from '../data/storiesData';
import WrittenText from '../components/WrittenText';

function getStory(id) {
  return stories.find((story) => story.id === id);

}

const StoryPage = () => {
  const { id } = useParams(); // Get 'id' from the route
  const story = getStory(id);


  if (!story) {
    return <h1>Story not found</h1>;
  }

  return (
    <WrittenText {...story}/>
  );
};

export default StoryPage;
