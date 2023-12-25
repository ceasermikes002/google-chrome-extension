// src/components/PopupComponent.js
import React, { useState } from 'react';
import '../PopupComponent.css'; // Import your custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const PopupComponent = ({ onBlock }) => {
  const [urls, setUrls] = useState('');
  const [duration, setDuration] = useState('');

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
      <nav className="custom-navbar">
        <div className="custom-brand">
          <a href="#">Focus Mode</a>
        </div>
        <ul className="custom-icons">
          <li>
            <a href="#" title="Home">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a href="#" title="Information">
              <FontAwesomeIcon icon={faInfoCircle} />
            </a>
          </li>
          <li>
            <a href="#" title="Contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </nav>
      <div className="custom-content">
        <h2 className="mb-4">Block Websites</h2>
        <div className="mb-3">
          <textarea
            className="custom-textarea"
            rows="4"
            placeholder="Enter URLs separated by commas"
            value={urls}
            onChange={(e) => setUrls(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="custom-input"
            placeholder="Enter blocking duration (in minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <button className="custom-btn" onClick={handleBlock}>
          Block Websites
        </button>
      </div>
      <footer className="custom-footer mt-4">
        <p>&copy; 2023 Focus Mode</p>
      </footer>
    </div>
  );
};

export default PopupComponent;
