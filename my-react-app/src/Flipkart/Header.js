import React from "react";
import Logo from "./Logo";
import Cart from "./Cart";
import Login from "./Login";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="flex py-8 gap-20 bg-gray-200">
      <Logo />
      <SearchInput />
      <Login />
      <Cart />
    </div>
  );
}

export default Header;
