import React, { useState } from "react";
import Form from "./Form";

function Table() {
  const [tableData, setTableData] = useState([
    { fname: "John", displayOrder: 1 },
    { fname: "Jane", displayOrder: 2 },
    { fname: "Alice", displayOrder: 3 },
    { fname: "Bob", displayOrder: 4 },
    { fname: "Charlie", displayOrder: 5 },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deleteRow = (index) => {
    const newdata = tableData.filter((_, i) => i !== index);
    setTableData(newdata);
  };

  const CreateRow = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (newRow) => {
    setTableData((prev) => [...prev, newRow]);
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  const EditRow = (index) => {
    const updatedData = [...tableData];
    const newName = prompt("Edit Name", updatedData[index].fname);
    if (newName !== null) {
      updatedData[index].fname = newName;
    }

    const newDisplayOrder = prompt(
      "Edit DisplayOrder",
      updatedData[index].displayOrder
    );
    if (newDisplayOrder !== null) {
      updatedData[index].displayOrder = newDisplayOrder;
    }

    setTableData(updatedData);
  };

  return (
    <div>
      <h2>Simple Table with Create, Edit, Delete</h2>

      
      {showForm && (
        <Form onSubmit={handleFormSubmit} onCancel={handleFormCancel} />
      )}

    
      <table border="1" style={{ marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>FName</th>
            <th>Display Order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.fname}</td>
              <td>{row.displayOrder}</td>
              <td>
                <button onClick={() => deleteRow(index)}>Delete |</button>
                <button onClick={() => EditRow(index)}>Edit |</button>
                <button onClick={() => CreateRow(index)}>Create</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
