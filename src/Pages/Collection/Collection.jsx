import React from "react";
import './Collection.css'
import Navbar from "../../Components/Navbar/Navbar";
import ProductCards from "../../Components/Product-Cards/Products-cards";
import Footer from "../../Components/Footer/Footer";


function Collection() {

    return(
        <>
        <Navbar/>
        <div className="collection-box">
        <ProductCards/>
        </div>
        <Footer/>
        </>
    );
}

export default Collection;