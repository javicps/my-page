import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Component() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Javier Martínez. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/javier-martinez-2b2a955/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/javiermartp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://github.com/javicps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
}
