import React from "react";
import './Products-category.css';

function ProductsCategory() {

    return(
        <>
        <div className="category-container">
                <h2>Featuring Products</h2>
            <div className="content">
                <div className="box">
                    <a href="/collection"><img src="/components-images/Featuring-images/men.png" alt="Men Collection" /></a>
                </div>
                <div className="box section">
                    <div className="kids">
                        <a href="/collection"><img src="/components-images/Featuring-images/kids.png" alt="Kids Collection" /></a>
                    </div>
                </div>
                <div className="box">
                    <a href="/collection"><img src="/components-images/Featuring-images/women.png" alt="Women Collection" /></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProductsCategory;