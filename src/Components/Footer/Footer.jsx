import React, { useState } from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";
import {
        faFacebook,
        faSquareInstagram,
        faLinkedin,
        } from "@fortawesome/free-brands-svg-icons";

function Footer() {

    const [links] = useState([
        {name: "Latest Products", path: '/collection'},
        {name: "Accessories", path: '/collection'}, 
        {name: "Trends", path: '/collection'}, 
        {name: "Cart", path:"/cart"}
    
    
    ]);
    const [contacts, setContacts] = useState([
                                                "Phone: 0123456789",
                                                "Email: reactify-innovations@gmail.com",
                                                "Address: Pakistan"
                                            ]);
    const [navLinks] = useState([
            { name: "Home", path: "/" },
            { name: "Collection", path: "/collection" },
            { name: "Contact Us", path: "/contact" }
        ]);

    return(
        <>
        <div className="footer-container">
            <footer className="footer">
                <div className="input-logo">
                    <div className="logo"><a href="/">Vira Aura</a></div>
                    <form action="#" className="input-box">
                        <input type="email" placeholder="Enter your Email..." />
                        <button className="sub-btn">Subscribe our newsletter</button>
                    </form>
                </div>
                <div className="social-nav-links">
                    <div className="quick-links">
                        <h3>Quick Links</h3>
                        <ul className="links">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} > {link.name} </Link> 
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-links">
                        <h3>Latest</h3>
                        <ul className="links">
                            {links.map((link, index) => 
                                <li key={index}>
                                    <Link to={link.path} > {link.name} </Link> 
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="social-links">
                        <h3>Social Media Links</h3>
                        <div className="sLinks">
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <p>All © Copyright reserved by Reactify Innovations</p>
                </div>
            </footer>
        </div>
        </>
    );
}

export default Footer;