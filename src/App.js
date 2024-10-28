// App.js
import React from "react";
import Navbar from "./components/Navbar";

import EmployeeManager from "./components/EmployeeManager";
import "./App.css";  // Importing the CSS file for styling

function App() {
  const backgroundStyle = {
    backgroundImage: 'url("/assets/salt-harvesting-3060093_1280.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    
    <div style={backgroundStyle}>
      <Navbar />
     
      <EmployeeManager />
    </div>
  );
}

export default App;
