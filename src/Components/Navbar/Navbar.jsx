import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCartShopping,
    faBars,
    faX,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const { cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const [navLinks] = useState([
        { name: "Home", path: "/" },
        { name: "Collection", path: "/collection" },
        { name: "Contact Us", path: "/contact" }
    ]);
    
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(searchTerm.trim() !== "") {
            navigate('/results', { state: { searchTerm } });
        }
    };


    

    return (
        <>
            <div className="container">
                <header className="navbar">
                    <div className="links-logo">
                        <div className="nav-logo">
                            <a href="/">
                                <h1>Vira Aura</h1>
                            </a>
                        </div>
                        <div className="nav-links">
                        <ul className="links">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} > {link.name} </Link> 
                                </li>
                            ))}
                        </ul>
                        </div>
                        <div className="harmBurger">
                            <button className="menu-btn" onClick={toggleSidebar}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>
                    </div>
                    <div className="search-cart">
                        <form className="search-bar" onClick={handleSubmitForm}>
                            <input
                                type="text"
                                name="searchBar"
                                id="searchTerm"
                                placeholder="Discover the Latest Fashion Trends..."
                                value={searchTerm}
                                onChange={(e) => {setSearchTerm(e.target.value)}}
                            />
                            <button className="search-btn" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                        <div className="cart">
                            <button className="cart-btn" onClick={() => navigate('/cart')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <div className="counter">{cartCount}</div>
                            </button>
                        </div>
                    </div>
                </header>
            </div>

            {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
            <div className={`side-menu ${isOpen ? "active" : ""}`}>
                <div className="close">
                    <button className="close-btn" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </div>
                <div className="nav-links">
                    <ul className="links">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} > {link.name} </Link> 
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
