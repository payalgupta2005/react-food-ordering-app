import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    // ✅ Cart count state
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            setCartCount(cart.length);
        };

        updateCart();

        // listen for changes
        window.addEventListener("storage", updateCart);

        return () => {
            window.removeEventListener("storage", updateCart);
        };
    }, []);

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="w-20">
                <img className="w-25 m-4" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 justify-center">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li >

                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    {/* ✅ Updated Cart */}
                    <li className="px-4">
                        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
                    </li>

                    <button
                        className="login"
                        onClick={() => {
                            btnName === "login"
                                ? setBtnName("logout")
                                : setBtnName("login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;