import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ReactComponent as OpenMenuIcon } from '../images/open-menu.svg'
import { ReactComponent as CloseMenuIcon } from '../images/close.svg'

import './Menu.scss';

export default () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="nav-menu">
      <div className="open-menu-btn-container">
        <button name="menu" className="hamburger-icon-btn" onClick={() => setMenuVisible(true)}>
          <OpenMenuIcon />
        </button>
      </div>
      <div className={`menu-container ${menuVisible && 'visible'}`}>
        <button className="close-menu-btn" onClick={() => setMenuVisible(false)}>
          <CloseMenuIcon />
        </button>
        <ul>
          <li>
            <NavLink activeClassName="active" to='/' onClick={() => setMenuVisible(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to='/contact-us' onClick={() => setMenuVisible(false)}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <Link className="login-btn" to="/login">Log In</Link>
    </nav>
  )
}