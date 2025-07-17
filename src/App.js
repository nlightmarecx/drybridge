// src/App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTable from "./ProductTable";
import WineHead1 from "./product pages/wine heads/WineHead0001";
import WineHead2 from "./product pages/wine heads/WineHead0002";
import WineHead3 from "./product pages/wine heads/WineHead0003";
import WineHead4 from "./product pages/wine heads/WineHead0004";
import WineHead5 from "./product pages/wine heads/WineHead0005";
import WineHead6 from "./product pages/wine heads/WineHead0006";
import WineHead7 from "./product pages/wine heads/WineHead0007";
import WineHead8 from "./product pages/wine heads/WineHead0008";
import WineHeadGvinovKakhuro from "./product pages/wine heads/WineHead-GvinovKakhuro";
import WineHeadGvinovKakhuro_v2 from "./product pages/wine heads/WineHead-GvinovKakhuro_v2";
import ProductDisplay from "./product pages/ProductDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductTable />} />
        <Route path="/winehead1" element={<WineHead1 />} />
        <Route path="/winehead2" element={<WineHead2 />} />
        <Route path="/winehead3" element={<WineHead3 />} />
        <Route path="/winehead4" element={<WineHead4 />} />
        <Route path="/winehead5" element={<WineHead5 />} />
        <Route path="/winehead6" element={<WineHead6 />} />
        <Route path="/winehead7" element={<WineHead7 />} />
        <Route path="/winehead8" element={<WineHead8 />} />
        <Route path="/winehead-gvinovkakhuro" element={<WineHeadGvinovKakhuro />} />
        <Route path="/winehead-gvinovkakhuro_v2" element={<WineHeadGvinovKakhuro_v2 />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/product/:productId" element={<ProductDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;