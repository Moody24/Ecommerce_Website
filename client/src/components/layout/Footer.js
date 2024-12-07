import React from 'react';
import {FaInstagram, FaFacebook} from 'react-icons/fa';
import './styles/Footer.css'

function Footer(){
    return(
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Nail Tech. All rights reserved.</p>
            <div className='social-media'>
                <a href='https://instagram.com' target='"_blank' rel='noopner noreffer'>
                <FaInstagram className="icon" />
                </a>
                <a href='https://faceboook.com' target='"_blank' rel='noopner noreffer'>
                <FaFacebook className="icon" />
                </a>

            </div>
        </footer>
    )
}