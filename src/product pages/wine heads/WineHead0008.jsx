// src/pages/WineHead8.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WineHead8 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/winehead-gvinovkakhuro");
  }, [navigate]);

  return null; // or <p>Redirecting...</p>
};

export default WineHead8;