import React from 'react';
import './NavBar.css';
import Logo from './assets/Logo.png';


const NavBar = (props) => {
    return (
        <nav className='navbar'>
            <div className='navbar-items-container'>
                <div className='logo-wrapper'>
                    <img src={Logo} />
                </div>
                <div className='nav-items-wrapper'>
                    <p className='nav-item-text-1'>Courses</p>
                    <p className='nav-item-text-1'>Pricing</p>
                    <p className='nav-item-text-1'>Community</p>
                    <p className='nav-item-text-1'>Support</p>
                </div>
            </div>
        </nav>)
};

export default NavBar;