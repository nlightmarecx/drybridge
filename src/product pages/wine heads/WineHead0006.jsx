// src/pages/WineHead6.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WineHead6 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/winehead-gvinovkakhuro");
  }, [navigate]);

  return null; // or <p>Redirecting...</p>
};
export default WineHead6;