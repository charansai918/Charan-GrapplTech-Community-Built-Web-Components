import React from 'react';
import './Navbar.css';
import logo1 from "../image/logo1.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* <img src='../image/logo.png'/> */}
                {/* <img src="../image/logo.jpg"/> */}
                <img className='logo1' src={logo1} alt="Logo"/>


            </div>
            <h1 className='heading' ><strong>Our Community</strong></h1>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="#home">Home</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
                <li className="nav-item"><a href="#services">Services</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
