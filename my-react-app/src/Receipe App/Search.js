import React from "react";

function Search() {
  return (
    <div className="m-8  flex justify-center">
      <input
        type="text"
        className="border-2  border-black p-2"
        placeholder="Enter products"
      ></input>
      <button type="submit" className="bg-blue-700 text-white w-40 h-10 ml-5">
        Search
      </button>
    </div>
  );
}
export default Search;
