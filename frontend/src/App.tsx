import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
