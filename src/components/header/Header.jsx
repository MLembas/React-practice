import React from 'react';
import classes from './Header.module.css';
import logo from './img/logo.svg'

const Header = () => {
  return(
     <div className={classes.header}>
        <div className={classes.header__logo}>
        <a href="/">
            <img src={logo} width={60}/>
         </a>
        </div>
<div className={classes.header__menu}>
        <ul>
           <li><a href='/'>Home</a></li>
           <li><a href='/'>Contact</a></li>
           <li><a href='/'>About</a></li>
           <li><a href='/'>Help</a></li>
        </ul>
     </div>
     </div>
  )
};

export default Header;
