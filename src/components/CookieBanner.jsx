// src/components/CookieBanner.js
import  { useState } from 'react';


const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptCookies = () => {
    setIsVisible(false);
    // You can also set a cookie here to remember the user's choice
    // document.cookie = "cookiesAccepted=true; path=/; max-age=31536000"; // Example for 1 year
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>This website uses cookies to enhance the user experience. By clicking "Accept", you consent to our use of cookies.</p>
      <button onClick={handleAcceptCookies}>Accept</button>
    </div>
  );
};

export default CookieBanner;
