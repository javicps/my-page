import React from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const stories = [
    { title: "La ley del desierto", slug: "laleydeldesierto" },
    { title: "Story 2", slug: "story-2" },
    { title: "Story 3", slug: "story-3" },
  ];

  return (
    <div>
      <h1>My Writing</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>
            <Link to={`/writing/${story.slug}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Writing;
