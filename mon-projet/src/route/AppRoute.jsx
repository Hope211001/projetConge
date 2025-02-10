import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePersonnel from "../pages/personnel/CreatePersonnel";
const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreatePersonnel />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
