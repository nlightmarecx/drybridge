// src/pages/WineHeadGvinovKakhuro.jsx
import React, { useState, useRef, useEffect} from "react";
import "../../styles/WineHeadGvinovKakhuro.css";
import translations from "../../data/translations";
import songs from "../../data/songs";

const WineHeadGvinovKakhuro = () => {
  const [activeLang, setActiveLang] = useState("ENG");

  const handleLanguageSwitch = (lang) => {
    setActiveLang(lang);
  };
 
  const t = translations[activeLang];

/* No Audio Upload for this moment, but will be needed in future
  const handleAudioUpload = () => {
    alert("In the full version, this would open audio recording/upload");
  };
*/

const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null);

const [currentSong, setCurrentSong] = useState(null);

useEffect(() => {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  setCurrentSong(randomSong);
}, []);

const handlePlayPause = () => {
  const audio = audioRef.current;
  if (!audio) return;

  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  setIsPlaying(!isPlaying);
  if (!hasBeenClicked) {
    setHasBeenClicked(true); 
  }
};

const [hasBeenClicked, setHasBeenClicked] = useState(false);

const [showMessage, setShowMessage] = useState(false);

useEffect(() => {
  if (!hasBeenClicked) {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 8600);

    return () => clearTimeout(timer);
  }
}, [hasBeenClicked]);


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
        {["GE", "ENG", "RU"].map((lang) => (
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
        <h1>{t.title}</h1>
        <p className="title-motto">{t.motto}</p>
      </div>

      <div className="audio-section">
        <h2>{t.audioTitle}</h2>
          <div className="product-photo-wrapper"
            style={{
              backgroundImage: "url('/Product%20Covers/tbilisi-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
          <video
              src="/Product Covers/Runwayml_Wine-Heads-Dancingv3.mp4"
              className="product-photo"
              autoPlay
              loop
              muted
              playsInline
          />
          <img
            src={isPlaying ? "./Icons/speaker-on.png" : "./Icons/speaker-off.png"}
            alt="Play Button"
            className={`play-button-overlay ${!hasBeenClicked ? "bouncing" : ""}`}
            onClick={handlePlayPause}
          />
          {showMessage && !hasBeenClicked && (
            <p className="play-hint-text">{t.playhinttext}</p>
          )}
        </div>
        {currentSong && (
          <>
            <p className="song-title">
              {currentSong.name[activeLang] || currentSong.name.ENG}
            </p>
            <audio 
              ref={audioRef} 
              controls 
              className="audio-memo" 
              onEnded={() => setIsPlaying(false)}
              key={currentSong.path} // Force re-render when song changes
            >
              <source src={currentSong.path} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </>
        )}
        <p className="audio-section-p">
          {t.audioText}
        </p>
      </div>

      {/* Memory Photo section */}
      <div className="memory-section">
        <div className="memory-section-header">
          <h2>{t.uploadTitle}</h2>
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
            <span>{t.location}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>{t.copyright}</p>
      </div>

    </div>
  );
};

export default WineHeadGvinovKakhuro;
