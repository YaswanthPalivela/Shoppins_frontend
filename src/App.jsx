import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppleWatch from "./components/AppleWatch";
import Applestudio from "./components/Applestudio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Applestudio />} />
        <Route path="/AppleWatch" element={<AppleWatch />} />
      </Routes>
      <Applestudio />
    </Router>
  );
};

export default App;
