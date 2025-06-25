import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AsidePanel from "./AsidePanel";
import Dashboard from "./Dashboard";
import Shortcuts from "./Shortcuts";
import Overview from "./Overview";

function MenuPages() {
  return (
    <div>
      <Router>
        <div className="flex">
          <AsidePanel />
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/shortcuts" element={<Shortcuts />} />
              <Route path="/overview" element={<Overview />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default MenuPages;
