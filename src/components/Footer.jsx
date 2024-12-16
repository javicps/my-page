import React from 'react';
import { Link } from 'react-router-dom';


export default function Component() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Javier Martinez. All rights reserved.</p>
    </footer>
  )
}
