import React from 'react';
import { Link } from 'react-router-dom';

const Writing = () => {
  const stories = [
    { title: "La ley del desierto", slug: "laleydeldesierto" },
    { title: "La inevitable soledad de Henrietta Penbroke", slug: "inevitablesoledad" },
    { title: "Entre los muertos habrá siempre una lengua viva", slug: "entrelosmuertos" },
    { title: "Desyat", slug: "desyat" },
  ];

  return (
    <div class="free-text">
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
