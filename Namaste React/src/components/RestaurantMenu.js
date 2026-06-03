import menus from "../utils/menus.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = menus[resId];
    setResInfo(data);
  };

  if (!resInfo)
    return <h2 className="text-center mt-10">Loading...</h2>;

  const info = resInfo?.cards?.[2]?.card?.card?.info;

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Restaurant Info */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold">{info.name}</h1>

        <p className="text-gray-600 mt-2">
          {info.cuisines.join(", ")}
        </p>

        <p className="mt-2">{info.avgRating} ⭐</p>

        <p>{info.costForTwoMessage}</p>
      </div>

      {/* Menu */}
      <h2 className="text-3xl font-bold mb-4">
        Menu
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {resInfo.menu.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() => handleAddToCart(item)}
              className="bg-green-100 px-4 py-2 rounded-lg hover:bg-green-200"
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;




















// import menus from "../utils/menus.json";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
//   const { resId } = useParams();
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = menus[resId];
//     setResInfo(data);
//   };

//   if (!resInfo) return <h2>Loading...</h2>;

//   const info = resInfo?.cards?.[2]?.card?.card?.info;

//   // 👇 Updated handleAddToCart to store items in localStorage
//   const handleAddToCart = (item) => {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.push(item);
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // 🔥 trigger navbar update
//   window.dispatchEvent(new Event("storage"));
// };
//   return (
//     <div className="menu">
//       <h1>{info.name}</h1>
//       <p>{info.cuisines.join(", ")}</p>
//       <p>{info.avgRating} ⭐</p>
//       <p>{info.costForTwoMessage}</p>

//       <h2>Menu</h2>
//       <ul>
//         {resInfo.menu.map((item) => (
//           <li key={item.id}>
//             {item.name} - ₹{item.price}{" "}
//             <button onClick={() => handleAddToCart(item)}>Add</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantMenu;