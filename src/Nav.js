import React from 'react';
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg'

const navbar = () => {
  return (
    <nav className='Nav'>
        <img src={logo} className="Ironhack-logo" alt="logo" />
        <img src={menu} className="Menu-top" alt="menu" />
    </nav>
  )
}

export default navbar;