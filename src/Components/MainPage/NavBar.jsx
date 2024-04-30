import React from 'react';
import './NavBar.css';
import { FiSettings } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <img src={require("../Assets/Leaf.png")} className='navbar-icon' />
        <h1 className='navbar-title'> Green Guard</h1>
      </div>
      <ul className='nav-links'>
        <li><Link to='/home'>HOME</Link></li>
        <li><Link to='/issues'>ISSUES</Link></li>
        <li><Link to='/escalated'>ISSUES ESCALATED</Link></li>
        <li><Link to='/report-submit'>SUBMIT A REPORT</Link></li>
        <div className='dropdown'>
          <button className='dropbtn'><span>PROFILE</span></button>
          <ul className='dropdown-menu'>
            <li className='menu-item'><Link to='/settings'><FiSettings />Settings</Link></li>
            <li className='menu-item'><Link to='/'><LuLogOut />Logout</Link></li>
          </ul>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
