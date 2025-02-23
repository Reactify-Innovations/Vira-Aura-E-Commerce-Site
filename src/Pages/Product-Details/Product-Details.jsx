import React, { useContext,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Product-Details.css";

import Navbar from "../../Components/Navbar/Navbar";
import Reviews from "../../Components/reviews/reviews";
import Footer from "../../Components/Footer/Footer";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product details:", error));
    }, [id]);
    

    if (!product) return <p className="text">Loading product details...</p>;

    return (
        <>
            <Navbar />
            <div className="product-details-container">
                <div className="details-card">
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="details">
                        <h2>{product.title}</h2>
                        <span>Product Description:</span>
                        <p>{product.description}</p>
                        <span className="price">Price: ${product.price}</span>
                        <button className="addCart" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Reviews />
            <Footer />
        </>
    );
}

export default ProductDetails;
