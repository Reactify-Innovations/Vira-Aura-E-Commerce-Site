import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/Routes"; 
import { CartProvider } from "./Context/CartContext";

function App() {
    return (
        <CartProvider> 
            <Router>
                <AppRoutes />
            </Router>
        </CartProvider>
    );
}

export default App;
