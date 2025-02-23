import React from "react";
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Banner from '../../Components/Banner/Banner';
import ProductsCategory from '../../Components/Featuring-Products/Products-category';
import ProductsCards from '../../Components/Product-Cards/Products-cards';
import Footer from '../../Components/Footer/Footer';

function Home() {

    return(
        <>
        <Navbar/>
        <Banner/> 
        <ProductsCategory/>
        <ProductsCards/>
        <Footer/>
        </>
    );
}

export default Home;