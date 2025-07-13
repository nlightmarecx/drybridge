// src/pages/WineHeadGvinovKakhuro.jsx
import React, { useState } from "react";

const WineHeadGvinovKakhuro = () => {
  const [activeLang, setActiveLang] = useState("ENG");

  const handleLanguageSwitch = (lang) => {
    setActiveLang(lang);
    // Implement language switching logic here if needed
  };

  const handleAudioUpload = () => {
    alert("In the full version, this would open audio recording/upload");
  };

  return (
    <div className="wine-head-page">
      <style>{`
        :root {
          --primary: #8B0000;
          --secondary: #F0E68C;
          --text: #333333;
          --light-bg: #f9f4e8;
        }
        .wine-head-page {
          background-color: var(--light-bg);
          color: var(--text);
          line-height: 1.6;
          padding: 20px;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }
        .language-selector {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-bottom: 10px;
        }
        .language-btn {
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 5px;
        }
        .language-btn.active {
          color: var(--primary);
          font-weight: bold;
          border-bottom: 2px solid var(--primary);
        }
        .product-display {
          text-align: center;
          margin-bottom: 30px;
        }
        .product-image {
          width: 200px;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          border: 3px solid var(--secondary);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          height: 0;
          overflow: hidden;
          margin-bottom: 20px;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        h1 {
          color: var(--primary);
          margin: 15px 0 5px;
          font-size: 1.5rem;
        }
        .product-meta {
          color: #666;
          font-style: italic;
        }
        .memory-section {
          background: white;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
        }
        h2 {
          color: var(--primary);
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        .memory-photo {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 15px;
          max-height: 250px;
          object-fit: cover;
        }
        .voice-memo {
          width: 100%;
          margin: 15px 0;
        }
        .upload-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          font-size: 0.9rem;
          cursor: pointer;
          display: block;
          margin-top: 10px;
          width: fit-content;
        }
        .memory-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          margin: 25px 0;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
        }
        .memory-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .memory-icon {
          font-size: 1.5rem;
        }

        .photo-message {
          width: 100%;
          max-height: 250px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .location-marker {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #555;
          margin-top: 8px;
        }

        .location-icon {
          font-size: 1rem;
        }

        .footer {
          text-align: center;
          color: #777;
          margin-top: 40px;
          font-size: 0.85rem;
        }
      `}</style>

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
            src="./Memory Sharing Photos/upload-product-img.png"
            alt="Memory from Georgia"
            className="photo-message"
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

export default WineHeadGvinovKakhuro;
