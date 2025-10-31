import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./locales/i18n.ts";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage isRegisterMode={false} />} />
        <Route path="/register" element={<LoginPage isRegisterMode={true} />} />
      </Routes>
    </div>
  );
}

export default App;
