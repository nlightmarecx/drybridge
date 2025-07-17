// src/pages/WineHeadGvinovKakhuro_v2.jsx
import React, { useState } from "react";
import "../../styles/WineHeadGvinovKakhuro.css";

const WineHeadGvinovKakhuro_v2 = () => {
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

      <div className="product-display">
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2cQP2gNFHcM?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
        <h1>David's Wine Companion</h1>
        <p className="product-meta">Handmade wool felt cover • Georgia</p>
      </div>

      <div className="memory-section">
        <h2>David's Voice Message</h2>
        <img
          src="./Product Covers/Wine Heads.jpg"
          alt="Memory from Georgia"
          className="memory-photo"
        />
        <p>
          "This wine cover reminds me of our amazing tour through Kakheti's
          vineyards. The Kindzmarauli winery was our favorite stop!"
        </p>
        <audio controls className="voice-memo">
          <source src="./Audio Files/song-lola-hunter.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button className="upload-btn" onClick={handleAudioUpload}>
          Upload New Audio
        </button>
      </div>

      {/* Memory Photo Card */}
      <div className="memory-card">
        <div className="memory-header">
          <div className="memory-icon">📸</div>
          <h2>Memory Photo</h2>
        </div>
        <div className="memory-content">
          <img
            src={uploadedPhoto || "./Memory Sharing Photos/upload-product-img.png"}
            alt="User memory"
            className="photo-message"
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
            <span>Kindzmarauli Winery, May 15, 2024</span>
          </div>
        </div>
      </div>


      {/* Product Story Card */}
      <div className="memory-card">
        <div className="memory-header">
          <div className="memory-icon">🧵</div>
          <h2>The Story Behind This Piece</h2>
        </div>
        <div className="memory-content">
          <p>
            This wine cover was hand-felted by Eteri in Telavi using traditional
            Georgian wool-felting techniques passed down through three generations.
            The patterns represent the Alazani Valley vineyards.
          </p>
          <div className="location-marker">
            <span className="location-icon">📍</span>
            <span>Made in Telavi, Georgia</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Tap any NFC-enabled phone to this tag to experience the memories</p>
        <p>© 2024 Georgian Artisan Souvenirs</p>
      </div>

    </div>
  );
};

export default WineHeadGvinovKakhuro_v2;
