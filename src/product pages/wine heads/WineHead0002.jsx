// src/pages/WineHead2.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WineHead2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/winehead-gvinovkakhuro");
  }, [navigate]);

  return null; // or <p>Redirecting...</p>
};

export default React.memo(WineHead2);