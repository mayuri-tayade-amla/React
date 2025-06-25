import React from "react";

function Header() {
  return (
    <div className="container flex justify-between bg-gray-200 p-10 ">
      <div className="nav-link-container">
        <a class="nav-link text-blue-400 font-bold" href="/">
          Food Recipe App
        </a>
      </div>
      <div className="about-me">
        <a class="nav-link text-black" href="/about">
          About Me
        </a>
      </div>
    </div>
  );
}
export default Header;
