// src/App.js
import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      author: "Lia",
      category: "Wool Felted",
      subcategory: "Animals",
      productType: "Birds",
      productSize: "Small",
      productId: "BIRD01-2025",
      name: "Blue Sparrow",
      price: "€15.00",
      quantity: 5,
      notes: "Best seller",
    },
    {
      author: "Lia",
      category: "Wool Felted",
      subcategory: "Animals",
      productType: "Birds",
      productSize: "Medium",
      productId: "BIRD02-2025",
      name: "Red Robin",
      price: "€18.00",
      quantity: 3,
      notes: "Pair with BIRD01",
    },
    {
      author: "Lia",
      category: "Wool Felted",
      subcategory: "Plants",
      productType: "Cactus",
      productSize: "Small",
      productId: "PLANT01-2025",
      name: "Mini Cactus Set",
      price: "€12.00",
      quantity: 1,
      notes: "",
    },
  ];

return (
    <div className="App">
      <h1>DryBridge Product Table</h1>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Category</th>
            <th>Subcategory</th>
            <th>Product Type</th>
            <th>Size</th>
            <th>Product ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.productId}>
              <td>{item.author}</td>
              <td>{item.category}</td>
              <td>{item.subcategory}</td>
              <td>{item.productType}</td>
              <td>{item.sizeCategory}</td>
              <td>{item.productId}</td>
              <td>
                <a href={`#/${item.productId.toLowerCase()}`}>{item.name}</a>
              </td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;