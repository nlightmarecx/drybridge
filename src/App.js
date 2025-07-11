// src/App.js
import React, { useState, useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WineHead1 from "./product pages/wine heads/WineHead0001";
import WineHead2 from "./product pages/wine heads/WineHead0002";
import WineHead3 from "./product pages/wine heads/WineHead0003";
import WineHead4 from "./product pages/wine heads/WineHead0004";
import WineHead5 from "./product pages/wine heads/WineHead0005";
import WineHead6 from "./product pages/wine heads/WineHead0006";
import WineHead7 from "./product pages/wine heads/WineHead0007";
import WineHead8 from "./product pages/wine heads/WineHead0008";
import WineHeadGvinovKakhuro from "./product pages/wine heads/WineHead-GvinovKakhuro";

  const rawProducts = [
    { author: "Luka", category: "Chess", subcategory: "Traditional", productSize: "69mm", productId: "LUI-202507-CH-0001", name: "Trad Epoxy Chess", notes: "50 GEL" },
    { author: "Luka", category: "Chess", subcategory: "RPG", productSize: "69mm", productId: "LUI-202507-CH-0002", name: "RPG Epoxy Chess", notes: "50 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0001", name: "Bird", notes: "20 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0002", name: "Bunny", notes: "20 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0003", name: "Donkey", notes: "30 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Medium", productId: "LIA-202507-WF-0004", name: "Donkey", notes: "40 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Big", productId: "LIA-202507-WF-0005", name: "Donkey", notes: "50 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Small", productId: "LIA-202507-WF-0006", name: "Giraffe", notes: "30 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Medium", productId: "LIA-202507-WF-0007", name: "Giraffe", notes: "40 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animal", productSize: "Big", productId: "LIA-202507-WF-0008", name: "Giraffe", notes: "50 GEL" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0001", name: "Wine Head 0001", notes: "25 GEL", route: "/winehead1" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0002", name: "Wine Head 0002", notes: "25 GEL", route: "/winehead2"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0003", name: "Wine Head 0003", notes: "25 GEL", route: "/winehead3" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0004", name: "Wine Head 0004", notes: "25 GEL", route: "/winehead4"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0005", name: "Wine Head 0005", notes: "25 GEL", route: "/winehead5" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0006", name: "Wine Head 0006", notes: "25 GEL", route: "/winehead6"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0007", name: "Wine Head 0007", notes: "25 GEL", route: "/winehead7" },
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-0008", name: "Wine Head 0008", notes: "25 GEL", route: "/winehead8"},
    { author: "Lia", category: "Wine Decor", subcategory: "Wine Head", productSize: "Small", productId: "LIA-202507-WFWH-T0001", name: "WH-Gvinov Kakhuro", notes: "25 GEL", route: "/wineHead-gvinovkakhuro"},
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0009", name: "Cheburashka", notes: "" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0010", name: "Winnie the Puh", notes: "" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0011", name: "Baba Yaga", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Big", productId: "LIA-202507-WF-00012", name: "Firosmani's Meezove", notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0014", name: "Village Grandpha", notes: "100 - 120 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0015", name: "Witch Grandma", notes: "100 - 120 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0016", name: "Noble Grandma", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Varies", productId: "LIA-202507-WF-0017", name: "Georgia Dancers", notes: "160 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Small", productId: "LIA-202507-WF-0018", name: "Firosmani's Meezove", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0019", name: "Kahketian guy", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Medium", productId: "LIA-202507-WF-0020", name: "Firosmani's Metevze", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Big", productId: "LIA-202507-WF-0021", name: "Firosmani's Metevze", notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Big", productId: "LIA-202507-WF-0022", name: "Frida Kahlo", notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Character", productSize: "Small", productId: "LIA-202507-WF-0023", name: "Firosmani's Margarita", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Painting", productSize: "Medium", productId: "LIA-202507-WF-0024", name: "Firosmani's Deer", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Painting", productSize: "Medium", productId: "LIA-202507-WF-0025", name: "Firosmani's Meezove", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Painting", productSize: "Medium", productId: "LIA-202507-WF-0026", name: "Firosmani's Metevze", notes: "150 GEL" },
    { author: "Lia", category: "Magnet", subcategory: "Woodmagnet", productSize: "Small", productId: "LIA-202507-MN-0001", name: "Kakheli", notes: "5 GEL" },
  ];

function App() {

  // Unique authors & categories for filters
  const allAuthors = [...new Set(rawProducts.map(p => p.author))];
  const allCategories = [...new Set(rawProducts.map(p => p.category))];

  const [selectedAuthors, setSelectedAuthors] = useState(new Set(allAuthors));
  const [selectedCategories, setSelectedCategories] = useState(new Set(allCategories));
 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });


const toggleSet = (setFn, value) => {
  setFn(prev => {
    const next = new Set(prev);
    next.has(value) ? next.delete(value) : next.add(value);
    return next;
  });
};

const filteredProducts = useMemo(() => {
  let filtered = rawProducts.filter(
    p => selectedAuthors.has(p.author) && selectedCategories.has(p.category)
  );

  if (sortConfig.key) {
    filtered.sort((a, b) => {
      const aKey = (a[sortConfig.key] ?? "").toString().toLowerCase();
      const bKey = (b[sortConfig.key] ?? "").toString().toLowerCase();
      if (aKey < bKey) return sortConfig.direction === "asc" ? -1 : 1;
      if (aKey > bKey) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  return filtered;
}, [rawProducts, selectedAuthors, selectedCategories, sortConfig]);

  const onSort = (columnKey) => {
  setSortConfig(prev => {
    if (prev.key === columnKey) {
      return {
        key: columnKey,
        direction: prev.direction === "asc" ? "desc" : "asc",
      };
    } else {
      return { key: columnKey, direction: "asc" };
    }
  });
};


  return (
    <Router>
  <div className="App">
    <h1>DryBridge Product Table</h1>
    {/* Filters above table */}
    <div className="filters">
      <h3>Filter by Author</h3>
      {allAuthors.map(author => (
        <label key={author} style={{ display: "inline-block", marginRight: "1rem" }}>
          <input
            type="checkbox"
            checked={selectedAuthors.has(author)}
            onChange={() => toggleSet(setSelectedAuthors, author)}
          />{" "}
          {author}
        </label>
      ))}

      <h3 style={{ marginTop: "1rem" }}>Filter by Category</h3>
      {allCategories.map(category => (
        <label key={category} style={{ display: "inline-block", marginRight: "1rem" }}>
          <input
            type="checkbox"
            checked={selectedCategories.has(category)}
            onChange={() => toggleSet(setSelectedCategories, category)}
          />{" "}
          {category}
        </label>
      ))}
    </div>

    {/* Table */}
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <button
              onClick={() => onSort("author")}
              style={{ cursor: "pointer", userSelect: "none" }}
              className={`sortable-header ${sortConfig.key === "author" ? "active" : ""}`}
              title="Click to sort by Author"
            >
              Author {sortConfig.key === "author" ? (sortConfig.direction === "asc" ? "⬇️" : "⬆️") : ""}
            </button>
          </th>
          <th>
            <button
              onClick={() => onSort("category")}
              style={{ cursor: "pointer", userSelect: "none" }}
              className={`sortable-header ${sortConfig.key === "category" ? "active" : ""}`}
              title="Click to sort by Category"
            >
              Category {sortConfig.key === "category" ? (sortConfig.direction === "asc" ? "⬇️" : "⬆️") : ""}
            </button>
          </th>
          <th>Subcategory</th>
          <th>Product Size</th>
          <th>Name</th>
          <th>Product ID</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product, index) => (
          <tr key={product.productId}>
            <td>{index + 1}</td> 
            <td>{product.author}</td>
            <td>{product.category}</td>
            <td>{product.subcategory}</td>
            <td>{product.productSize}</td>
            <td>
              {product.route ? (
                <Link to={product.route}>{product.name}</Link>
              ) : (
                product.name
              )}
            </td>
            <td>{product.productId}</td>
            <td>{product.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Routes>
          <Route path="/winehead1" element={<WineHead1 />} />
          <Route path="/winehead2" element={<WineHead2 />} />
          <Route path="/winehead3" element={<WineHead3 />} />
          <Route path="/winehead4" element={<WineHead4 />} />
          <Route path="/winehead5" element={<WineHead5 />} />
          <Route path="/winehead6" element={<WineHead6 />} />
          <Route path="/winehead7" element={<WineHead7 />} />
          <Route path="/winehead8" element={<WineHead8 />} />
          <Route path="/winehead-gvinovkakhuro" element={<WineHeadGvinovKakhuro />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
  </div>
  </Router>
);

}

export default App;