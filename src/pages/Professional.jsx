import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "Javier Martínez - Professional";
  }, []);

  return (
    <div className="free-text">
      <h1>About Me</h1>
      <p>
        I'm Javier Martinez. I have over fifteen years of experience as an
        engineer, including more than eight years leading IT teams. My expertise
        spans areas such as e-commerce, CI/CD, Kubernetes, observability, and
        building service-oriented architectures.
      </p>
      <p>
        I've worked in international roles, contributing to projects in diverse
        technical environments.
      </p>
      <p>Accolades:</p>
      <ul>
        <li>
          Check the{" "}
          <a
            href="https://sysdig.com/blog/author/javier-martinez/"
            target="_blank"
          >
            technical articles I wrote for Sysdig
          </a>
        </li>

        <li>
          The piece about{" "}
          <a
            href="https://sysdig.com/blog/debug-kubernetes-crashloopbackoff/"
            target="_blank"
          >
            Crashloopbackoff
          </a>{" "}
          reached #1 rank in Google and was featured in several professional
          channels
        </li>

        <li>
          I wrote the script for{" "}
          <a
            href="https://sysdig.com/blog/tales-from-the-kube/"
            target="_blank"
          >
            Tales from the Kube!
          </a>
          , a comicbook brochure handed at Kubecon 2023
        </li>

        <li>
          Watch my{" "}
          <a href="https://www.youtube.com/watch?v=cQkCOZWjXNs" target="_blank">
            talk about Container Checkpointing
          </a>{" "}
          in Open Source Summit Europe (with Daniel Simionato)
        </li>

        <li>
          Developed the{" "}
          <a
            href="https://apkcombo.com/es/jpod-15-zgz/com.lolquizz.jpod15zgz/"
            target="_blank"
          >
            Android application for JPOD
          </a>
          , a podcasting event in Zaragoza
        </li>
      </ul>
    </div>
  );
};

export default About;
