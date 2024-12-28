import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppleWatch from "./components/AppleWatch";
import Applestudio from "./components/Applestudio";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Applestudio />} />
        <Route path="/watches" element={<AppleWatch />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
