import React from "react";
import './Contact.css';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function ContactUs() {

    return(
        <>
        <Navbar/>

        <div className="contact-box">
            <div className="contact-inner-box">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <label htmlFor="nameField">Name:</label>
                    <input  type="text"
                            placeholder="Your Name"
                            name="nameField"
                            id="nameField"
                            required
                        />
                    <label htmlFor="inputField">Email:</label>
                    <input  type="email"
                            placeholder="Email Address"
                            name="inputField"
                            id="inputField"
                            required
                        />
                    <label htmlFor="textField">Your Message:</label>
                    <textarea  type="text"
                            placeholder="Enter Your Message Here..."
                            name="textField"
                            id="textField"
                            required
                        />

                        <button type="submit">Submit</button>
                </form>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default ContactUs;