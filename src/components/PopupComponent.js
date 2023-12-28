// src/components/PopupComponent.js
import React, { useState, useEffect } from 'react';
import '../PopupComponent.css'; // Import your custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlus, faClock } from '@fortawesome/free-solid-svg-icons';

const PopupComponent = ({ onBlock }) => {
  const [urls, setUrls] = useState('');
  const [duration, setDuration] = useState('');
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const handleBlock = () => {
    const urlList = urls.split(',').map(url => url.trim());
    const blockingDuration = parseInt(duration, 10);

    if (urlList.length > 0 && blockingDuration > 0) {
      onBlock(urlList, blockingDuration);

      // Send a message to the background script to block websites
      chrome.runtime.sendMessage({
        action: 'blockWebsites',
        urls: urlList,
        duration: blockingDuration,
      });
    }
  };

  return (
    <div className="custom-popup">
      <div className="info-icon">
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>
      <div className="pink-container"> {/* Added pink-container div */}
        <h3 className="focus-mode">Focus Mode</h3>
      </div>
      <div className='time'>{currentTime}</div>       
      <div className="custom-content">
        <h2>Block Websites</h2>
        <div className="mb-3">
          <input
            type="number"
            placeholder="Enter blocking duration (in minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Add new site"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          />
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <button className="btn block-btn" onClick={handleBlock}>
         Enter Focus Mode
      </button>
      <footer className="custom-footer">
        <p>&copy; 2023 Focus Mode</p>
      </footer>
    </div>
  );
};

export default PopupComponent;
