import { createContext, useState, useEffect } from "react";

// ✅ Create Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // ✅ Initialize cart from localStorage correctly
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // ✅ Save cartItems to localStorage whenever cartItems change
    useEffect(() => {
        if (cartItems.length > 0) { // ✅ Prevents empty array from overwriting storage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    // ✅ Add item to cart
    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // ✅ Remove item from cart
    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // ✅ Increase quantity
    const increaseQuantity = (id) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // ✅ Decrease quantity (Remove item if quantity is 1)
    const decreaseQuantity = (id) => {
        setCartItems((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0) // ✅ Remove items with quantity 0
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
