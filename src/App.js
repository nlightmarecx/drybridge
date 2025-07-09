// src/App.js
import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const rawProducts = [
    { author: "Lia", category: "Wool Felted", subcategory: "Mythical", productSize: "Medium", productId: "BABA01", name: "Baba Yaga", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Big", productId: "FIRME01", name: "Firosmani Meezove Big", notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Toys", productSize: "Small", productId: "WINHEAD01", name: "Wine head wool toy with Georgian man head on bottle", notes: "25 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Mythical", productSize: "Medium", productId: "GRANDPHA01", name: "Grandpha", notes: "100 - 120 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Mythical", productSize: "Medium", productId: "WHICHGMA01", name: "Which Grandma", notes: "100 - 120 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Mythical", productSize: "Medium", productId: "NOBLEGMA01", name: "Noble Grandma", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Small", productId: "DONKEYS01", name: "Donkey Small", notes: "30 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Medium", productId: "DONKEYM01", name: "Donkey Medium", notes: "40 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Big", productId: "DONKEYB01", name: "Donkey Big", notes: "50 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Small", productId: "GIRRAFES01", name: "Giraffe Small", notes: "30 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Medium", productId: "GIRRAFEM01", name: "Giraffe Medium", notes: "40 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Big", productId: "GIRRAFEB01", name: "Giraffe Big", notes: "50 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Culture", productSize: "Varies", productId: "GEODANC01", name: "Georgia Folk Dancers: Woman and Man", notes: "80 GEL Each, both 150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Small", productId: "FIRSMEES01", name: "Firosmani Meezove Small", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "People", productSize: "Medium", productId: "KAHKETI01", name: "Kahketian guy", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Medium", productId: "FIRMETEV01", name: "Firosmani Metevze", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Big", productId: "FIRMETEVB01", name: "Firosmani Metevze Big", notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "People", productSize: "Big", productId: "FRIDABIG01", name: "Frida Big", notes: "200 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Medium", productId: "FIRMDEER01", name: "Firosmani Deer Painting", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Medium", productId: "FIRSMEEP01", name: "Firosmani Meezove Painting", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Medium", productId: "FIRMETPA01", name: "Firosmani Metevze Painting", notes: "150 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Art", productSize: "Small", productId: "FIRMARGS01", name: "Firosmani Margarita Small", notes: "100 GEL" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Small", productId: "SMBIRD01", name: "Small Bird", notes: "x5" },
    { author: "Lia", category: "Wool Felted", subcategory: "Animals", productSize: "Small", productId: "SMBUNNY01", name: "Small Bunny", notes: "x7" },
    { author: "Lia", category: "Wool Felted", subcategory: "Characters", productSize: "Medium", productId: "CHEBUR01", name: "Cheburashka", notes: "" },
    { author: "Lia", category: "Wool Felted", subcategory: "Characters", productSize: "Medium", productId: "WINPUH01", name: "Winnie the Puh", notes: "" },
    { author: "Luka", category: "Chess", subcategory: "Epoxy Chess", productSize: "69mm", productId: "Chess01", name: "EpoxyChess", notes: "" },
    { author: "Lia", category: "Souvenir", subcategory: "Magnet", productSize: "Small", productId: "WoodMagnet01", name: "Kakheli", notes: "" },
  ];

  // Unique authors & categories for filters
  const allAuthors = [...new Set(rawProducts.map(p => p.author))];
  const allCategories = [...new Set(rawProducts.map(p => p.category))];

  const [selectedAuthors, setSelectedAuthors] = useState(new Set(allAuthors));
  const [selectedCategories, setSelectedCategories] = useState(new Set(allCategories));
 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });


  const toggleSet = (setFn, value) => {
    setFn(prev => {
      const newSet = new Set(prev);
      if (newSet.has(value)) newSet.delete(value);
      else newSet.add(value);
      return newSet;
    });
  };

const filteredProducts = useMemo(() => {
  let filtered = rawProducts.filter(
    p => selectedAuthors.has(p.author) && selectedCategories.has(p.category)
  );

  if (sortConfig.key) {
    filtered.sort((a, b) => {
      const aKey = a[sortConfig.key].toLowerCase();
      const bKey = b[sortConfig.key].toLowerCase();
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
          {/* your sortable headers here */}
          <th
            onClick={() => onSort("author")}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Author {sortConfig.key === "author" ? (sortConfig.direction === "asc" ? "⬇️" : "⬆️") : ""}
          </th>
          <th
            onClick={() => onSort("category")}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Category {sortConfig.key === "category" ? (sortConfig.direction === "asc" ? "⬇️" : "⬆️") : ""}
          </th>
          <th>Subcategory</th>
          <th>Product Size</th>
          <th>Product ID</th>
          <th>Name</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map(product => (
          <tr key={product.productId}>
            <td>{product.author}</td>
            <td>{product.category}</td>
            <td>{product.subcategory}</td>
            <td>{product.productSize}</td>
            <td>{product.productId}</td>
            <td><a href={`#/${product.productId.toLowerCase()}`}>{product.name}</a></td>
            <td>{product.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}

export default App;
