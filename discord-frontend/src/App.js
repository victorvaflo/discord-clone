import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./authPages/LoginPages/LoginPage";
import RegisterPage from "./authPages/RegisterPages/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";
import AlertNotification from "./shared/components/AlertNotification";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
