import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/mainContent.css";

function MainContent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MainContent;
