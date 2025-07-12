// src/ProductTable.js
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import rawProducts from "./data/productsdata"; 

function ProductTable() {
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
  }, [selectedAuthors, selectedCategories, sortConfig]);

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
    <div>
      <h1>DryBridge Product Table</h1>
      {/* Filters */}
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
                className={`sortable-header ${sortConfig.key === "author" ? "active" : ""}`}
              >
                Author {sortConfig.key === "author" ? (sortConfig.direction === "asc" ? "⬇️" : "⬆️") : ""}
              </button>
            </th>
            <th>
              <button
                onClick={() => onSort("category")}
                className={`sortable-header ${sortConfig.key === "category" ? "active" : ""}`}
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
                <Link to={product.route ?? `/product/${product.productId}`}>
                  {product.name}
                </Link>
              </td>
              <td>{product.productId}</td>
              <td>{product.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
