// src/popup.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Popup = ({ onBlock }) => {
  const [urls, setUrls] = useState('');
  const [duration, setDuration] = useState('');

  const handleBlock = () => {
    const urlList = urls.split(',').map(url => url.trim());
    const blockingDuration = parseInt(duration, 10);

    if (urlList.length > 0 && blockingDuration > 0) {
      onBlock(urlList, blockingDuration);
    }
  };

  return (
    <div>
      <h2>Block Websites</h2>
      <textarea
        placeholder="Enter URLs separated by commas"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter blocking duration (in minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={handleBlock}>Block Websites</button>
    </div>
  );
};

// Find the root element in the HTML and render the Popup component inside it
const rootElement = document.getElementById('root');
ReactDOM.render(<Popup />, rootElement);
