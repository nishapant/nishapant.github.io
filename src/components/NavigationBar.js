import React from 'react';
import { Link } from 'react-router-dom';

import '../style/NavigationBar.css'

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <ul>
            <li><Link to="/">about</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/music">music</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;