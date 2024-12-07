import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

function NavBar(){
    return(
        <nav className="navbar">
            <h1 className='navbar-brand'> Luxify Nails</h1>
            <ul className='navbar-links'>
                <li><link to ="/"></link></li>
                <li><link to ="/">Home</link></li>
                <li><link to ="/services">Services</link></li>
                <li><link to ="/booking">Booking</link></li>
                <li><link to ="/contacts">Contacts</link></li>
            </ul>
        </nav>
    );
}
export default NavBar;