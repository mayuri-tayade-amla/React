import React, { useState } from "react";

function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handlechange = (e) => {
    setUsername(e.target.value);
  };
  const handlechange2 = (e) => {
    setPassword(e.target.value);
  };
  const handlelogin = (e) => {
    alert(`Username: ${username} Password: ${password}`);
  };
  return (
    <div className=" pl-5 box-content h-96 w-96 p-4 border-4">
      <h2 className="font-bold text-2xl tracking-wide text-center">Login</h2>
      <div className="pt-5">
        <label className="flow-root">Username</label>
        <input
          type="text"
          className=" m-3 flow-root border-b-4 border-indigo-200"
          placeholder="Type your username"
          onChange={handlechange}
        ></input>
        <br></br>
        <label className="flow-root">Password</label>
        <input
          type="text"
          className="m-3 flow-root  border-b-4 border-indigo-200"
          placeholder="Type your password"
          onChange={handlechange2}
        ></input>
        <label className="flow-root text-right">Forgot Password?</label>
        <button
          className="border to-black m-2 rounded-xl w-48 bg-fuchsia-300 mt-8"
          onClick={handlelogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
