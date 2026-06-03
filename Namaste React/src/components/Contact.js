import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you! Feel free to send us your questions,
        feedback, or suggestions.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email Address"
            className="border p-3 rounded"
          />

          <textarea
            rows="5"
            placeholder="Write your message here..."
            className="border p-3 rounded"
          ></textarea>

          <button className="bg-pink-200 py-2 rounded hover:bg-pink-300">
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Contact Information
        </h2>

        <p>Email: support@foodorderapp.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Faridabad, Haryana, India</p>
      </div>
    </div>
  );
};

export default Contact;