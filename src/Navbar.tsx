import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Contacts</Link></li>
        <li><Link to="/charts">Charts</Link></li>
        <li><Link to="/maps">Maps</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
