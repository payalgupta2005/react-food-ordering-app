import React from "react";
import User from "./User";

const About = () => {
  return (
    <div className="min-h-screen bg-pink-50 px-6 py-10">
      
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          About FoodieHub 🍔
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          FoodieHub is a modern food ordering platform inspired by Swiggy.
          Users can explore restaurants, discover delicious meals, and enjoy
          a seamless food ordering experience built with React.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto mt-16 bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Our Mission 🚀
        </h2>

        <p className="text-gray-600 text-center leading-7">
          This project was created to learn modern frontend development
          concepts such as React components, state management, routing,
          API integration, and responsive UI design while building a
          real-world application.
        </p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Features ✨
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              🍽 Restaurant Discovery
            </h3>
            <p className="text-gray-600">
              Browse multiple restaurants with detailed information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              🔍 Smart Search
            </h3>
            <p className="text-gray-600">
              Quickly find restaurants using the search functionality.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              ⭐ Top Rated Filter
            </h3>
            <p className="text-gray-600">
              Discover highly-rated restaurants instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              📱 Responsive Design
            </h3>
            <p className="text-gray-600">
              Optimized for desktop, tablet, and mobile devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              ⚡ Fast Performance
            </h3>
            <p className="text-gray-600">
              Built using React's component-based architecture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              🛒 Cart Functionality
            </h3>
            <p className="text-gray-600">
              Add your favorite dishes and manage orders easily.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technologies Used 💻
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "React Router",
            "HTML5",
            "REST APIs",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-white shadow-md px-5 py-3 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Developer Section */}
      <div className="mt-16">
        <User
          name={"Payal Gupta"}
          location={"Faridabad, India"}
        />
      </div>
    </div>
  );
};

export default About;






// import React from "react";
// import User from "./User";

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Food Ordering App</h1>

//       <p>
//         This project is a Swiggy-inspired food ordering web application built
//         using React.js. It allows users to explore restaurants, browse menus,
//         and view food items dynamically using real-time API data.
//       </p>

//       <p>
//         The main goal of this project is to practice modern frontend development
//         using React, including component-based architecture, API integration,
//         and responsive UI design.
//       </p>

//       <h2>Features</h2>
//       <ul>
//         <li>Browse restaurants dynamically</li>
//         <li>View restaurant menus and food items</li>
//         <li>Fetch live data using API</li>
//         <li>Reusable React components</li>
//         <li>Responsive user interface</li>
//       </ul>

//       <h2>Technologies Used</h2>
//       <ul>
//         <li>React.js</li>
//         <li>JavaScript (ES6+)</li>
//         <li>HTML5</li>
//         <li>CSS3</li>
//         <li>Swiggy API</li>
//       </ul>

     
//         <User name={"Payal Gupta"} location={"Faridabad, India"} />
//     </div>
//   );
// };

// export default About;