import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { ReactComponent as OpenMenuIcon } from '../images/open-menu.svg'
import { ReactComponent as CloseMenuIcon } from '../images/close.svg'

import './Menu.scss';

export default () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav>
      <button name="menu" className="hamburger-icon-btn" onClick={() => setMenuVisible(true)}>
        <OpenMenuIcon />
      </button>
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
    </nav>
  )
}