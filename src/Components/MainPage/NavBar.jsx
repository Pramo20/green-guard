import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FiSettings } from 'react-icons/fi';
import { LuLogOut } from 'react-icons/lu';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
      <a href='/home'>
          <img src={require('../Assets/Leaf.png')} className='navbar-icon' alt='Logo' />
          
        </a>
        <h1 className='navbar-title'>Green Guard</h1>
        

      </div>
      <ul className='nav-links'>
        <li><NavLink exact to='/home' activeClassName='active'>HOME</NavLink></li>
        <li><NavLink to='/issues' activeClassName='active'>ISSUES</NavLink></li>
        <li><NavLink to='/escalated' activeClassName='active'>ISSUES ESCALATED</NavLink></li>
        <li><NavLink to='/report-submit' activeClassName='active'>SUBMIT A REPORT</NavLink></li>
        <div className='dropdown'>
          <button className='dropbtn'><span>PROFILE</span></button>
          <ul className='dropdown-menu'>
            <li className='menu-item'><NavLink to='/settings'><FiSettings />Settings</NavLink></li>
            <li className='menu-item'><NavLink to='/'><LuLogOut />Logout</NavLink></li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
