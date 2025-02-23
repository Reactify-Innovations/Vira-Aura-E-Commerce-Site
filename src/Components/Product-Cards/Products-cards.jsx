import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Products-cards.css";

function ProductCards() {
    const [products, setProducts] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);


    return (
        <div className="cards-container">
            <h3 className="main-heading">Collection</h3>
            <div className="card-details">
                {products.length === 0 ? (
                    <p>Loading Products...</p>
                ) : (
                    products.map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <span>${product.price}</span>
                            <button onClick={() => navigate(`/product-details/${product.id}`)}>
                                Buy Now
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ProductCards;
