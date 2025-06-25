import React from "react";
import { Link } from "react-router-dom";

function AsidePanel() {
  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Shortcuts", path: "/shortcuts" },
    { name: "Overview", path: "/overview" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <aside className="bg-black w-40 h-screen text-white">
      <h3 className="border-b-2 p-5">My Menu</h3>
      {menu.map((test, index) => (
        <div key={index} className="pb-10 ps-7 pt-5 border-b-2 cursor-pointer">
          <Link to={test.path} className="text-white no-underline ">
            {test.name}
          </Link>
        </div>
      ))}
    </aside>
  );
}

export default AsidePanel;
