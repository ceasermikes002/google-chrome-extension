// src/popup.js
import React from 'react';
// import ReactDOM from 'react-dom';
import Popup from './components/PopupComponent.js';

// Find the root element in the HTML and render the Popup component inside it
const rootElement = document.getElementById('root');
ReactDOM.render(<Popup />, rootElement);
