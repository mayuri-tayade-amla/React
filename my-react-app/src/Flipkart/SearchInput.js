import React, { useState } from "react";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");

  function handleChange() {
    alert("hii");
  }
  function handleClick() {
    console.log("hii");
  }
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        className="border-solid border-2 border-indigo-600 w-full h-10 px-8"
        onClick={handleClick}
      />
      
    </div>
  );
}

export default SearchInput;
