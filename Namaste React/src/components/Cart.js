import { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(data);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Your Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl">Cart is Empty</h3>
        </div>
      ) : (
        <>
          <div className="bg-white shadow-lg rounded-lg p-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-3"
              >
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>

          <div className="bg-pink-50 shadow-lg rounded-lg p-6 mt-6 text-center">
            <h2 className="text-2xl font-bold">
              Total: ₹{total}
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;