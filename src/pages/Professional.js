import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I'm Javier Martinez. I have over 15 years of experience as an engineer, including more than eight years leading IT teams. My expertise spans areas such as e-commerce, CI/CD, Kubernetes, observability, and building service-oriented architectures.
      </p>
      <p>
        I've worked in international roles, contributing to projects in diverse technical environments. Some highlights include presenting at the Open Source Summit Europe 2023 and leading a team to migrate a retail company's e-commerce solution to a modern framework.
      </p>
      
      <p>Check the <a href="https://sysdig.com/blog/author/javier-martinez/">technical articles I wrote for Sysdig</a></p>

      <p>Watch my talk about Container Checkpointing in Open Source Summit Europe (with Daniel Simionato)</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cQkCOZWjXNs?si=nWPi8rRTa2n18umh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
  );
};

export default About;
