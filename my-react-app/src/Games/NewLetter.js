import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-purple-800 text-white text-center py-10">
      <h2 className="text-2xl font-bold">Subscribe to our emails!</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="mt-4 px-4 py-2 rounded-lg text-black"
      />
      <button className="bg-pink-500 px-6 py-2 ml-2 rounded-lg">
        Subscribe
      </button>
    </section>
  );
};

export default Newsletter;
