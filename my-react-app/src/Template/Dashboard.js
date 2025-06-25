import React, { useState } from "react";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const openmodal = () => {
    setOpen(true);
    alert("jjj");
  };
  return (
    <div>
      <button onClick={openmodal}>popup</button>
    </div>
  );
}
export default Dashboard;
