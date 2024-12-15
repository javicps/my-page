import React from 'react';
import { Link } from 'react-router-dom';


export default function Component() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/professional">Professional</Link></li>
        <li><Link to="/writing">Writing (ES)</Link></li>
      </ul>
    </nav>
  )
}
