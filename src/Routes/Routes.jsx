import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/Product-Details/Product-Details";
import SearchResults from "../Pages/SearchResults/SearchResults";
import Collection from "../Pages/Collection/Collection";
import ContactUs from "../Pages/ContactUs/ContactUs"
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout-Info/Checkout";

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
                <Route path="/results" element={<SearchResults />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/checkout" element={<Checkout />} />

            </Routes>
        </>
    );
}

export default AppRoutes;
