import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as OpenMenuIcon } from '../images/open-menu.svg'
import { ReactComponent as CloseMenuIcon } from '../images/close.svg'

import actions from '../actions';

import './Menu.scss';

export default () => {
  const { menuVisible } = useSelector(({ globalReducer }) => ({ menuVisible: globalReducer.menuVisible }))
  const dispatch = useDispatch();

  const setGlobalMenuVisible = (visible) => {
    dispatch(actions.setMenuVisibility(visible));
  }

  return (
    <nav className="nav-menu">
      <div className="open-menu-btn-container">
        <button name="menu" className="hamburger-icon-btn" onClick={() => setGlobalMenuVisible(true)}>
          <OpenMenuIcon />
        </button>
      </div>
      <div className={`menu-container ${menuVisible && 'visible'}`}>
        <button className="close-menu-btn" onClick={() => setGlobalMenuVisible(false)}>
          <CloseMenuIcon />
        </button>
        <ul>
          <li>
            <NavLink activeClassName="active" to='/' onClick={() => setGlobalMenuVisible(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to='/contact-us' onClick={() => setGlobalMenuVisible(false)}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <Link className="login-btn" to="/login">Log In</Link>
    </nav>
  )
}