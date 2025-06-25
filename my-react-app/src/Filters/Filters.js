import React, { useState } from "react";

function Filters() {
  const [open, setOpen] = useState(false);
  const [arr1, setArr1] = useState(["first name","last name"]);


  const openmodal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const AddContent = () => {
    const arr = [...arr1];
    arr.push("first name","last name");
    setArr1([...arr]);
  };
  return (
    <div className="text-center me-5">
      <button onClick={openmodal}>Filter</button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            {arr1.map((menu, index) => {
              return (
                <div>
                  <label className="text-gray-600 mb-4">{menu}:</label>
                  <input className="me-5 mt-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>
              );
            })}

            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 me-7"
              onClick={closeModal}
            >
              Close Modal
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mt-5"
              onClick={AddContent}
            >
              Add Content
            </button>

            {/* {content && (
              <div>
                <h2>Hello my world</h2>
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters;
