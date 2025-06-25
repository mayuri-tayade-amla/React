import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p>Follow us on:</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="text-pink-500">
          YouTube
        </a>
        <a href="#" className="text-pink-500">
          Instagram
        </a>
        <a href="#" className="text-pink-500">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
