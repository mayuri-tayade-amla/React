import React, { useState } from "react";

function Form({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({ fname: "", displayOrder: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.fname && formData.displayOrder) {
      onSubmit(formData); // Send data back to Table
      setFormData({ fname: "", displayOrder: "" });
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="text"
        name="fname"
        placeholder="Enter First Name"
        value={formData.fname}
        onChange={handleChange}
      />
      <input
        type="number"
        name="displayOrder"
        placeholder="Enter Display Order"
        value={formData.displayOrder}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default Form;
