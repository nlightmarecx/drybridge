// src/pages/WineHead1.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WineHead1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/winehead-gvinovkakhuro");
  }, [navigate]);

  return null; // or <p>Redirecting...</p>
};

export default React.memo(WineHead1);