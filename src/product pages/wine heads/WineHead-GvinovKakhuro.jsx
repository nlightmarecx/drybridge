// src/pages/WineHeadGvinovKakhuro.jsx
import React, { useState, useRef, useEffect} from "react";
import "../../styles/WineHeadGvinovKakhuro.css";
import translations from "../../data/translations";
import songs from "../../data/songs";

const WineHeadGvinovKakhuro = () => {
  const [activeLang, setActiveLang] = useState("GE");

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
const toastAudioRef = useRef(null);    // NEW toast audio

const [currentSong, setCurrentSong] = useState(null);

useEffect(() => {
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  setCurrentSong(randomSong);
}, []);

const handlePlayPause = () => {
  const songAudio = audioRef.current;
  const toastAudio = toastAudioRef.current;

  if (!songAudio) return;

  // Pause toast audio if it's playing
  if (toastAudio && !toastAudio.paused) {
    toastAudio.pause();
  }

  // Toggle song audio
  if (isPlaying) {
    songAudio.pause();
  } else {
    songAudio.play();
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
        {["GE", "ENG"].map((lang) => (
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
      
      {/* TOAST AUDIO SECTION */}
      
        <div className="toast-audio-section">
          <div className="toast-audio-controls">
            <button
              className="toast-button"
              onClick={() => {
                const toastAudio = toastAudioRef.current;
                const songAudio = audioRef.current;

                // Pause song if it's playing
                if (songAudio && !songAudio.paused) {
                  songAudio.pause();
                  setIsPlaying(false);
                }

                // Toggle toast audio
                if (toastAudio.paused) {
                  toastAudio.play();
                } else {
                  toastAudio.pause();
                }
              }}
            >
              {t.toastPlay || t.ToastTamada}
            </button>

            <button
              className="toast-button upload"
              onClick={() => {
                alert("Upload feature coming soon!");
              }}
            >
              {t.toastUpload || t.YourToast}
            </button>

            <audio
              ref={toastAudioRef}
              id="toastAudio"
              className="toast-audio"
              controls
              preload="metadata"
            >
              <source src="/Audio Files/Georgian Toasts/ხარება და გოგია_საქართველოს-სადღეგრძელო.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>

      {/* Memory Photo section */}
      <div className="memory-section">
        <div className="memory-section-header">
          <h2>{t.uploadTitle}</h2>
        </div>
        <div className="memory-content">
          {/* Hidden file input */}
          <input
            id="memory-upload"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            style={{ display: 'none' }}
          />
          
          {/* Clickable image that triggers the input */}
          <label htmlFor="memory-upload">
            <img
              src={uploadedPhoto || "./Memory Sharing Photos/upload-product-img.png"}
              alt="User memory"
              className="memory-photo"
              style={{ cursor: 'pointer' }}
            />
          </label>
          <input
            type="file"
            accept="image/*"
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
