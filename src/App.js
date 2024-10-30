// src/App.js
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EmployeeManager from "./components/EmployeeManager";
import LoginPage from "./components/LoginPage"; 
import RegistrationPage from "./components/RegistrationPage";
import CookieBanner from "./components/CookieBanner"; // Import CookieBanner
import "./App.css";  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const backgroundStyle = {
    backgroundImage: 'url("/assets/salt-harvesting-3060093_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={backgroundStyle}>
      <Navbar onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={isLoggedIn ? <EmployeeManager /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/EmployeeManager" element={<EmployeeManager />} /> {/* Add route for EmployeeManager */}
        {/* Add more routes as needed */}
      </Routes>

      <CookieBanner /> {/* Include CookieBanner here */}
    </div>
  );
}

export default App;
