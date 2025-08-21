// src/App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductTable from "./ProductTable";
import TrackView from "./data/TrackView";
import WineHead1 from "./product pages/wine heads/WineHead0001";
import WineHead2 from "./product pages/wine heads/WineHead0002";
import WineHead3 from "./product pages/wine heads/WineHead0003";
import WineHead4 from "./product pages/wine heads/WineHead0004";
import WineHead5 from "./product pages/wine heads/WineHead0005";
import WineHead6 from "./product pages/wine heads/WineHead0006";
import WineHead7 from "./product pages/wine heads/WineHead0007";
import WineHead8 from "./product pages/wine heads/WineHead0008";
import WineHeadGvinovKakhuro from "./product pages/wine heads/WineHead-GvinovKakhuro";
import WineHeadGvinovKakhurov2 from "./product pages/wine heads/WineHead-GvinovKakhurov2";
import ProductDisplay from "./product pages/ProductDisplay";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductTable />} />

        <Route path="/winehead1" element={<TrackView><WineHead1 /></TrackView>} />
        <Route path="/winehead2" element={<TrackView><WineHead2 /></TrackView>} />  
        <Route path="/winehead3" element={<TrackView><WineHead3 /></TrackView>} />  
        <Route path="/winehead4" element={<TrackView><WineHead4 /></TrackView>} />  
        <Route path="/winehead5" element={<TrackView><WineHead5 /></TrackView>} />  
        <Route path="/winehead6" element={<TrackView><WineHead6 /></TrackView>} />  
        <Route path="/winehead7" element={<TrackView><WineHead7 /></TrackView>} />  
        <Route path="/winehead8" element={<TrackView><WineHead8 /></TrackView>} />  

        <Route path="/winehead-gvinovkakhuro" element={<TrackView><WineHeadGvinovKakhuro /></TrackView>} />
        <Route path="/winehead-gvinovkakhurov2" element={<TrackView><WineHeadGvinovKakhurov2 /></TrackView>} />
        
        <Route path="*" element={<div>404 - Page Not Found</div>} />
        <Route path="/product/:productId" element={<ProductDisplay />} />

      </Routes>
    </Router>
  );
}

export default App;