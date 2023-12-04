import React from "react";
import logo from '../img/logo512.png';
import '../styles/Logo.css';

function Logo() {
  return (
    <div className='logo-container'>
      <img
        className='logo'
        src={logo}
        alt="Logo" />
      <h1 className='title'>Task Check</h1>
    </div>
  )
}

export default Logo;