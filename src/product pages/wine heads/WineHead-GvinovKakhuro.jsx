// src/pages/WineHeadGvinovKakhuro.jsx
import React, { useState } from "react";
import "../../styles/WineHeadGvinovKakhuro.css";

const WineHeadGvinovKakhuro = () => {
  const [activeLang, setActiveLang] = useState("ENG");

  const handleLanguageSwitch = (lang) => {
    setActiveLang(lang);
    // Implement language switching logic here if needed
  };

  const handleAudioUpload = () => {
    alert("In the full version, this would open audio recording/upload");
  };

const [uploadedPhoto, setUploadedPhoto] = useState(null);

const handlePhotoUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setUploadedPhoto(imageUrl);
  }
};

// <--------- CONTENT AND HTML CODE --------->
  return (
    <div className="mobile-container wine-head-page">
      <div className="language-selector">
        {["ENG", "GE", "RU"].map((lang) => (
          <button
            key={lang}
            className={`language-btn ${activeLang === lang ? "active" : ""}`}
            onClick={() => handleLanguageSwitch(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="title-display">
        <h1>This Gift Sings You a Story</h1>
        <p className="title-motto">This souvenir is evidence that YOU survived a Georgian supra.</p>
      </div>

      <div className="audio-section">
        <h2>Let me Play one Final Song!</h2>
        <img
          src="./Product Covers/Wine Heads.jpg"
          alt="Product Images - Bottles of Wine with the Wine Clothes"
          className="product-photo"
        />
        <audio controls className="audio-memo">
          <source src="./Audio Files/Sufruli-Gvinov-kakhuro.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="audio-section-p">
          I was made by real hands, not factory machines. That is what made me witness of many gossips about you.
        </p>
      </div>

      {/* Memory Photo section */}
      <div className="memory-section">
        <div className="memory-section-header">
          <h2>Upload Your Fav  Memory Photo!</h2>
        </div>
        <div className="memory-content">
          <img
            src={uploadedPhoto || "./Memory Sharing Photos/upload-product-img.png"}
            alt="User memory"
            className="memory-photo"
          />
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoUpload}
            style={{ marginBottom: "10px" }}
          />
          <div className="location-marker">
            <span className="location-icon">📍</span>
            <span>Tbilisi, Georgia. July 2025</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025, Polypore Warriors</p>
      </div>

    </div>
  );
};

export default WineHeadGvinovKakhuro;
