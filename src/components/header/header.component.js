import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom'
import SwitchesGroup from '../modes/modesSwitch';


const Header = () => (
  <div className='header'>
    <div >
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/projects'>Projects</Link>
      <Link className='link' to='/experience'>Experience</Link>
      <Link className='link' to='/aboutMe'>About me</Link>
    </div>
    <SwitchesGroup/>
  </div>
  
);

export default Header;