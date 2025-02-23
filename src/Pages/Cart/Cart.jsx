import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import './Cart.css';

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';


function Cart() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    const handleCheckout = () => {
        if(cartItems?.length > 0) {
            navigate('/checkout');
        }
    };

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <div className="cart-inner-box">
                    <h2>Cart</h2>
                    <div className="cartItems">
                        {cartItems.length === 0 ? (
                            <p className="emptyCart">Your cart is empty.</p>
                        ) : (
                            cartItems.map((cartItem) => (
                                <div key={cartItem.id} className="items">
                                    <div className="img">
                                        <img src={cartItem.image} alt={cartItem.title} />
                                    </div>
                                    <div className="details">
                                        <h3>{cartItem.title}</h3>
                                        <p>{cartItem.description}</p>
                                        <span>Price: ${cartItem.price}</span>
                                        <p>
                                            Quantity: 
                                            <button className="btn" onClick={() => decreaseQuantity(cartItem.id)}>-</button>

                                            {cartItem.quantity}
                                            
                                            <button className="btn" onClick={() => increaseQuantity(cartItem.id)}>+</button>
                                        </p>
                                        <button className="del-btn" onClick={() => removeFromCart(cartItem.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className="box">
                        <p>Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                            <button className="checkout" onClick={handleCheckout }>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;