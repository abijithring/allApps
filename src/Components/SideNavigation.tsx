import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles/Sidebar.css'; // Make sure this path matches your CSS module file

const SideNavigation=()=>{
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className='toggle-btn' onClick={() => setIsOpen(!isOpen)}> 
        ☰
      </button>
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/allapps">All Apps</Link>
                </li>
                <li>
                    <Link to="/bootstrap">Bootstrap</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>    
      
    </div>
  );
};

export default SideNavigation;
// This code defines a functional component called SideNavigation that renders a sidebar navigation menu.
