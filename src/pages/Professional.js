import React from 'react';

const About = () => {
  return (
    <div class="free-text">
      <h1>About Me</h1>
      <p>
        I'm Javier Martinez. I have over fifteen years of experience as an engineer, including more than eight years leading IT teams. My expertise spans areas such as e-commerce, CI/CD, Kubernetes, observability, and building service-oriented architectures.
      </p>
      <p>
        I've worked in international roles, contributing to projects in diverse technical environments. 
      </p>
      
      <p>Check the <a href="https://sysdig.com/blog/author/javier-martinez/" target="_blank">technical articles I wrote for Sysdig</a></p>

      <p>The piece about <a href="https://sysdig.com/blog/debug-kubernetes-crashloopbackoff/" target="_blank">Crashloopbackoff</a> reached #1 rank in Google and was featured in several professional channels</p>

      <p>I wrote the script for <a href="https://sysdig.com/blog/tales-from-the-kube/">Tales from the Kube!</a>, a comicbook brochure handed at Kubecon 2023</p>

      <p>Watch my talk about Container Checkpointing in Open Source Summit Europe (with Daniel Simionato):</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cQkCOZWjXNs?si=nWPi8rRTa2n18umh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>
  );
};

export default About;
