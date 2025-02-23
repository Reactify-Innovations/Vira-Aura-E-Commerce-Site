import React, { useState, useEffect } from "react";
import './SearchResults.css';

import { useNavigate, useLocation } from "react-router-dom";

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';


function SearchResults() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchTerm = location.state?.searchTerm?.toLowerCase() || "";
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredProducts(filtered);
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false); 
            });
    }, [searchTerm]);


    return (
        <>
        <Navbar/>

        <div className="results-container">
        <h3 className="result-heading">Search Results For: {searchTerm}</h3>
        <div className="results-details">
            {loading ? (
                <p>Loading Products...</p> 
            ) : filteredProducts.length === 0 ? (
                <p>No Products Found</p>
            ) : (
                filteredProducts.map((product) => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <span>${product.price}</span>
                        <button onClick={() => navigate(`/product-details/${product.id}`)}>
                            Buy Now
                        </button>
                    </div>
            )))
            }
        </div>
    </div>
        <Footer/>
        </>
    );
}

export default SearchResults;