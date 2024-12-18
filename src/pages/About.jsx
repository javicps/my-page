import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Javier Martínez - About";
  }, []);

  return (
    <div className="free-text">
      <h1>About Me</h1>
      <p>Hi, I'm Javier Martinez. Welcome to my page.</p>
    </div>
  );
};

export default About;
