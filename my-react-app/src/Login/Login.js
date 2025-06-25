import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ProductDetails from "../PDP/ProductDetails";

function Header() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    hideShowForm: false,
  });

  const checkpass = (password) => {
    const passres =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;

    return passres.test(password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkEmailVal = (email) => {
    const emailres = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailres.test(email);
  };

  const handlelogin = (e) => {
    setFormValues({ ...formValues, hideShowForm: true });
  };
  const routing = (
    <Router>
      <div>
        <h1>React Router Example</h1>

        <Route path="/about" component={ProductDetails} />
      </div>
    </Router>
  );
  return (
    <div className=" pl-5 box-content h-96 w-96 p-4 border-4">
      <h2 className="font-bold text-2xl tracking-wide text-center">Login</h2>
      <div className="pt-5">
        <label className="flow-root">Username</label>
        <input
          value={formValues.username}
          type="email"
          className=" m-3 flow-root border-b-4 border-indigo-200"
          placeholder="Type your username"
          name="username"
          onChange={handleChange}
        />
        <br></br>
        <label className="flow-root">Password</label>
        <input
          value={formValues.password}
          type="text"
          className="m-3 flow-root  border-b-4 border-indigo-200"
          placeholder="Type your password"
          name="password"
          onChange={handleChange}
        />
        <label className="flow-root text-right">Forgot Password?</label>
        <button
          className="border to-black m-2 rounded-xl w-48 bg-fuchsia-300 mt-8"
          onClick={handlelogin}
        >
          Login
        </button>
      </div>
      {formValues.hideShowForm && (
        <div>
          <h3>Form Data</h3>
          <p>
            <strong>Username: </strong>
            {formValues.username}
          </p>
          <p>
            <strong>Password: </strong>
            {formValues.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
