import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
    <nav class="navbar">
        <div class="container">
            <div class="div0~1">
                <a href="https://t.me/Techtonic_Tribe/1" class="logo">
                    <img src="/pictures/ttt.jpg" alt="Company Logo" class="logo-image" />
                </a>
                
            </div>
            <div class="div02">
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="members.html">Member List</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="gallery.html">Gallery </a></li>
                   
                </ul>
            </div>
        </div>
    </nav>
    <hr />
</header>


        
    );
}

export default Header
