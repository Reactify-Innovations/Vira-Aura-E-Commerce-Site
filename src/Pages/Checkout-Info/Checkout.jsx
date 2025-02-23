import React, {useState, useContext}  from "react";
import { CartContext } from "../../Context/CartContext";
import './Checkout.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

    

function Checkout() {
    const [cartItems] = useContext(CartContext);
    const [selectedPayment, setSelectedPayment] = useState(""); 
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value); 
    };



    return(
        <>
        <Navbar/>

        <div className="checkout-box">
            <div className="inner-box">
                <h2>Checkout</h2>
                <form className="checkout-form">
                    <span>Total Price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                    <label htmlFor="nameField">Name * :</label>
                    <input  type="text" 
                            placeholder="Your Name"
                            id="nameField"
                            required
                    />
                    <label htmlFor="email">Email * :</label>
                    <input  type="email" 
                            placeholder="Email Address"
                            id="emailField"
                            required
                    />
                    <label htmlFor="numField">Phone Number * :</label>
                    <input  type="number" 
                            placeholder="Your Phone Number"
                            id="numField"
                            required
                    />
                    <label htmlFor="addressField">Home Address * :</label>
                    <input  type="text" 
                            placeholder="Your Home Address"
                            id="addressField"
                            required
                    />

                    <label htmlFor="paymentMethod">Select Payment Method * :</label>
                    
                    <select name="paymentMethod" id="paymentMethod" onChange={handlePaymentChange}>
                        <optgroup label="COD">
                            <option value="Cash On Delivery">Cash On Delivery</option>
                        </optgroup>
                        <optgroup label="Card">
                            <option value="Visa Card">Visa Card</option>
                            <option value="Master Card">Master Card</option>
                            <option value="Express Card">Express Card</option>
                        </optgroup>

                    </select>

                    
                    {["Visa Card", "Master Card", "Express Card"].includes(selectedPayment) && (
                <div className={`cards-box ${["Visa Card", "Master Card", "Express Card"].includes(selectedPayment) ? "visible" : ""}`}>
                    <label htmlFor="accField">Account No * :</label>
                    <input
                        type="text"
                        placeholder="(1 - 15)"
                        maxLength="15"
                        id="accField"
                        required
                    />
                    <div className="cvv-exp">
                        <div className="cvv">
                            <label htmlFor="cvvField">CVV * :</label>
                            <input  type="text" maxLength="3" 
                                    placeholder="CVV" 
                                    id="cvvField" 
                                    required />
                        </div>
                        <div className="exp">
                            <label htmlFor="expField">Expiry Date * :</label>
                            <input
                                type="text"
                                id="expiry-date"
                                placeholder="MM/YY"
                                maxLength="5"
                                pattern="(0[1-9]|1[0-2])\/\d{2}"
                                required
                            />
                        </div>
                    </div>
                </div>
            )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

        <Footer/>
        </>
    );
}

export default  Checkout;